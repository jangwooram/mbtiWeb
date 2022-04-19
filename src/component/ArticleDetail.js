import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import instance from "../ApiController";
import {Box, Button, Grid, TableHead, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";



const ArticleDetail = (props) => {
    const {article_id} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [details, setDetails] = useState([]);
    let [value, setValue] = React.useState('');

    useEffect(function () {
        async function getArticleDetail() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/detail/' + article_id + '/');
                setDetails(r.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getArticleDetail();
    }, [])
    const [comments,setComments] = useState([]);
    useEffect(function (){
        async function fetch() {
            const r = await instance.get(baseurl + '/api/v1/articles/detail/' + article_id + '/');
            setComments(r.data.data.comment);
            console.log(r.data.data.comment);
        }
        fetch();
    },[])

    const userComments = comments.map((comment)=>
        (<TableRow key={comment.id}>
            <TableCell>{comment.author}</TableCell>
            <TableCell>{comment.contents.split('\n').map((line) => {
                return (
                    <span>{line}<br /></span>
                )
            })}</TableCell>
            <TableCell>{comment.created_at}</TableCell>
        </TableRow>))

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    async function postComment() {
        if(!value){
            alert('내용을 입력하세요.');
            return;
        }
        const baseurl = process.env.REACT_APP_BASE_URL;
            try {
                const r = await instance.post(baseurl + '/api/v1/comments/create/', {
                    article_id: article_id,
                    contents: value,
                });
                if(r.data.status === 200){
                    alert('성공!');
                    //TODO: 라우트 랜딩페이지
                    setValue('');
                }else{
                    alert('네트워크 에러');
                }
                console.log(r.data);
            } catch (e) {
                console.log(e);
            }
        const r = await instance.get(baseurl + '/api/v1/articles/detail/' + article_id + '/');
        setComments(r.data.data.comment);
    }

    return (
        <div className="articleDetail">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 1,
                    },
                }}
            >
                <Paper sx={{textAlign: 'left', padding: '20px'}} elevation={1}>
                    <div style={{fontSize: '1.5em', marginBottom: '10px'}}>{details.title}</div>
                    <div>{details.author}</div>
                    <div>{details.created_at}</div>
                </Paper>
                <Paper sx={{textAlign: 'left', padding: '20px', minHeight: '300px'}} elevation={0}>
                    <div>{details.contents}</div>
                </Paper>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '90%'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="댓글입력창"
                            placeholder="반말하지마라"
                            multiline
                            value={value}
                            onChange={handleChange}
                        />
                        <Button
                            onClick={postComment}
                            style={{margin: '8px', height: '55px'}} variant="outlined" size="large">
                            확인
                        </Button>
                    </div>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{width:'10%'}}>작성자</TableCell>
                                <TableCell sx={{width:'70%'}}>제목</TableCell>
                                <TableCell>시간</TableCell>
                            </TableRow>
                        </TableHead>
                        {userComments}
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default ArticleDetail;
