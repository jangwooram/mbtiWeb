import * as React from 'react';
import PropTypes, {func} from 'prop-types';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {useEffect, useState} from "react";
import instance from "../ApiController";
import {useParams} from "react-router-dom";
import {Pagination, TableHead} from "@mui/material";
import {Link} from "@mui/icons-material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function ArticleList() {
    const {category} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [articles, setArticles] = useState([]);
    const [totalCount, setTotalCount] = useState([]);
    const [pageNum,setPageNum] = useState(1);

    useEffect((pageNum) => {
        async function getArticles() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/?offset=' + pageNum + '&limit=20');
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

    let showList = 20;
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
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/?offset=' + value + '&limit=20');
                setArticles(r.data.data);
            } catch (e) {
                console.log(e);
            }

        }
        getArticles();
    };
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
                            <Pagination
                                count={totalPage} page={pageNum} onChange={handleChange} shape="rounded"/>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default ArticleList;
