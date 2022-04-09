import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import instance from "../ApiController";
import {Box, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import BasicGrid from "./DetailPage";


function Item() {
    return null;
}

const ArticleDetail = () => {
    const {article_id} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [details, setDetails] = useState([]);
    console.log('article_id', article_id);
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

    return (
        <div className="articleDetail">
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: 50,
                        lineHeight: '50px',
                    },
                }}
            >
                <Paper elevation={1}>
                    <BasicGrid/>
                </Paper>
            </Box>
        </div>
    );
};

export default ArticleDetail;
