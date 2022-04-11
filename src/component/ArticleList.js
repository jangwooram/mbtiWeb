import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import instance from "../ApiController";
import {useParams} from "react-router-dom";
import {Button, Pagination, TableHead} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


function ArticleList() {
    const {category} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [articles, setArticles] = useState([]);
    const [totalCount, setTotalCount] = useState([]);
    const [pageNum,setPageNum] = useState(1);

    useEffect((pageNum) => {
        async function getArticles() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/?offset=' + pageNum + '&limit='+showList);
                //console.log(r.data);
                setTotalCount(r.data.total_count);
                setArticles(r.data.data);
            } catch (e) {
                console.log(e);
            }

        }
        // console.log('....',articles);
        getArticles();
    }, []);

    let showList = 15;
    let totalPage = 1;
    let pageCount = function () {
        if (totalCount < 3) {
            totalPage = 1;
            return;
        }
        if (totalCount % showList === 0) {
            totalPage = parseInt(totalCount / showList);
        }
        totalPage = parseInt(totalCount / showList + 1);
    }
    pageCount();

    const columns = [
        {id: '타입', label: '타입', minWidth: "10%"},
        {id: '제목', label: '제목', minWidth: "60%"},
        {id: '작성자', label: '작성자', minWidth: "10%"},
        {id: '작성시간', label: '작성시간', minWidth: "20%"}
    ];

    function linkClick(id) {
        window.location.href = '/ArticleDetail/' + id;
    }
    const handleChange = (event, value) => {
        setPageNum(value);
        async function getArticles() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/?offset=' + value + '&limit='+showList);
                setArticles(r.data.data);
            } catch (e) {
                console.log(e);
            }

        }
        getArticles();
    };
    function articleCreate() {
        window.location.href = '/ArticleCreate/';
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.id} align={column.align}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articles
                        .map((article) => (
                            <TableRow onClick={(e) => {
                                linkClick(article.id)
                            }} key={article.id} hover={true} style={{cursor: 'pointer'}}>
                                <TableCell style={{width: '10%'}} component="th" scope="row">
                                    {article.category}
                                </TableCell>
                                <TableCell style={{width: '60%'}} component="th" scope="row">
                                    {article.title}
                                </TableCell>
                                <TableCell style={{width: '10%', textAlign: "left"}} align="right">
                                    {article.author}
                                </TableCell>
                                <TableCell style={{width: '15%', textAlign: "left"}} align="right">
                                    {article.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4} style={{textAlign: "center", margin: 'auto'}}>
                            <Button sx={{float:'right', marginLeft:'30px'}} variant="contained"
                                    onClick={articleCreate}
                            >글쓰기</Button>
                            <Pagination sx={{float:'right'}}
                                count={totalPage} page={pageNum} onChange={handleChange} shape="rounded"/>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default ArticleList;
