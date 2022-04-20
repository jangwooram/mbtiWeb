import React,{useState,useEffect} from "react";
import axios from "axios";
import instance from "../ApiController";
import {Button, TextField} from "@mui/material";


function ArticleCreate({category}) {
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            try{
                const r = await axios.get(baseurl + '/api/v1/articles/categories/');
                setCategories(r.data.data);
            }catch(e){
                console.log(e);
            }
            
        }
        getCategories();
    }, []);

    return(
        <div className='ArticleCreate'>
            <div> 
                <div> 
                    <span>게시판: </span> 
                    <select id='article_category'> 
                        { categories.map(category =>(
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select> 
                </div> 
                <div>
                    <TextField fullWidth={true} id="article_title" label="제목" variant="outlined" />
                </div> 
                <div>
                    <TextField sx={{marginTop:'20px'}} maxRows={500} minRows={15} fullWidth={true} multiline id="article_content" label="여기 내용을 입력해주세요" variant="outlined" />
                </div> 
                <div>
                    <Button sx={{float: 'right', marginLeft: '30px', margin:'10px 0'}} variant="contained"
                            onClick={onCreateArticle}
                    >글쓰기</Button>
                </div>
            </div>
        </div>
    );
}

async function onCreateArticle() {
    const baseurl = process.env.REACT_APP_BASE_URL;
    const article_title = document.getElementById('article_title').value;
    const article_content = document.getElementById('article_content').value;
    const category = document.getElementById('article_category').value;
    if(!article_title || !article_content){
        alert('제목과 내용은 필수 입력값입니다.');
    }
    
    try {
        const r = await instance.post(baseurl + '/api/v1/articles/create/',{
            category: category,
            title: article_title,
            contents: article_content
        });
        if(r.data.status === 200){
            alert('성공!');
            //TODO: 라우트 랜딩페이지
        }else{
            alert('네트워크 에러');
        }
        console.log(r.data);
    }catch(e){
        console.log(e);
    }
}  

export default ArticleCreate;
