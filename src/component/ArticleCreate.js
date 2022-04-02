import React,{useState,useEffect} from "react";
import axios from "axios";
import instance from "../ApiController";


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
                    <span>제목: </span>
                    <input id="article_title"></input> 
                </div> 
                <div> 
                    <span>내용: </span>
                    <textarea id="article_content"></textarea>
                </div> 
                <div>
                    <button onClick={onCreateArticle}>작성</button>
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
        if(r.data.status == 200){
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