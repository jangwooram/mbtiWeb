import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import instance from "../ApiController";

function ArticleList() {
    const {category} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getArticles() {
            try{
                const r = await instance.get(baseurl + '/api/v1/articles/list/'+category+'/');
                console.log(r.data);
                setArticles(r.data.data);
            }catch(e){
                console.log(e);
            }
            
        }
        getArticles();
    }, []);


    return(
        <div className='ArticleList'>
            <h1>ArticleList</h1>
            {articles.map(article =>(
                <div key={article.id}>
                    <h1>{article.category}</h1>
                    <h1>{article.title}</h1>
                    <h1>{article.contents}</h1>
                    <h1>{article.hits}</h1>
                    <h1>{article.created_at}</h1>
                    <h1>{article.author}</h1>
                </div>
            ))}
            
        </div>
    );
}



export default ArticleList;