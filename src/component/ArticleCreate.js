import React,{useState} from "react";
import axios from "axios";


function ArticleCreate({category}) {
    return(
        <div className='ArticleCreate'>
            <div> 
                <div> 
                    <span>게시판: </span> 
                    <select> 
                        <option>선택</option> 
                        <option></option> 
                        <option></option> 
                    </select> 
                </div> 
                <div> 
                    <span>제목: </span>
                    <input></input> 
                </div> 
                <div> 
                    <span>내용: </span>
                    <textarea></textarea>
                </div> 
            </div>
        </div>
    );
}

async function getCategories(){
    const baseurl = process.env.REACT_APP_BASE_URL;
    try{
        let r =  await axios.get(baseurl + '/api/v1/articles/categories/');
        return r.data;
    }catch(e) {
        console.error(e);
    }
}

export default ArticleCreate;