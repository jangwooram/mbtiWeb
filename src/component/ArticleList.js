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


function ArticleList(props) {
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

        // console.log('....',articles);
        getArticles();
    }, []);

    const columns = [
        {id: '타입', label: '타입', minWidth: "10%"},
        {id: '제목', label: '제목', minWidth: "60%"},
        {id: '작성자', label: '작성자', minWidth: "10%"},
        {id: '작성시간', label: '작성시간', minWidth: "20%"}
    ];

        return (
            <div className='ArticleList'>
                <h1>어허! 바른말!</h1>
                <Paper sx={{width: '100%'}}>
                    <TableContainer sx={{maxHeight: 800}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow sx={{width: '100%'}}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {articles.map(article => (
                                <TableRow style={{textDecoration:"none"}} component={Link} to={'/ArticleDetail/'+article.id} key={article.id}>
                                        <TableCell style={{width:"10%"}}>
                                            {article.category}
                                        </TableCell>
                                        <TableCell style={{width:"60%"}}>
                                            {article.title}
                                        </TableCell>
                                        <TableCell style={{width:"10%"}}>
                                            {article.author}
                                        </TableCell>
                                        <TableCell style={{width:"20%"}}>
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
