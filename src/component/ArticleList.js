import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import instance from "../ApiController";
import './ArticleList.css';
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


function ArticleList() {
    const {category} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getArticles() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/');
                console.log(r.data);
                setArticles(r.data.data);
            } catch (e) {
                console.log(e);
            }

        }

        getArticles();
    }, []);

    const columns = [
        {id: '타입', label: '타입', minWidth: "20%"},
        {id: '제목', label: '제목', minWidth: "60%"},
        {id: '작성자', label: '작성자', minWidth: "15%"},
        {id: '작성시간', label: '작성시간', minWidth: "20%"}
    ];

    function createData(name, code, population, size) {
        const density = population / size;
        return {name, code, population, size, density};
    }

    return (
        <div className='ArticleList'>
            <h1>어허! 바른말!</h1>
            {/*{articles.map(article =>(
                <div key={article.id}>
                    <ul>
                        <li>{article.category}</li>
                        <li>{article.title}</li>
                        <li>{article.author}</li>
                        <li>{article.created_at}</li>
                    </ul>
                    <h1>{article.contents}</h1>
                    <h1>{article.hits}</h1>
                </div>
            ))}*/}
            <Paper sx={{width: '100%'}}>
                <TableContainer sx={{maxHeight: 800}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow sx={{width: '100%'}}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {articles.map(article => (
                            <TableRow key={article.id}>
                                <TableCell sx={{width:'10%'}}>
                                    {article.category}
                                </TableCell>
                                <TableCell sx={{width:'65%'}}>
                                    {article.title}
                                </TableCell>
                                <TableCell>
                                    {article.author}
                                </TableCell>
                                <TableCell>
                                    {article.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </TableContainer>
            </Paper>
            <div className="editBtn">
                <Link to={'/ArticleCreate'}>
                    <IconButton aria-label="edit">
                        <EditIcon fontSize="large"/>
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}


export default ArticleList;
