import React, {useEffect} from "react";
import './Content-main.css'
import NoticeBoard from "./Notice-board";
import {Link} from "react-router-dom";

function ContentMain(props) {
    const storageClear = function () {
        localStorage.clear();
    }
    useEffect(function () {
        props.setLoginInfo(false);
    })

    let mbtiName = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ",
        "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
    let nameList = [];
    let i = 0;
    while (i < mbtiName.length) {
            nameList.push(
                <div key={i} className="board">
                    <Link onClick={storageClear} style={{ textDecoration: 'none',color:'#444' }} to={"/ArticleList/" + mbtiName[i]}>
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon' + mbtiName[i] + '.png'}
                                                   alt=""/></div>
                        <div className="text">{mbtiName[i]}</div>
                    </Link>
                </div>
            )
        i += 1;
    }


    return (
        <div className="contents">
            <div className="mbti-board">
                {nameList}
            </div>
            <NoticeBoard/>
        </div>
    );
}

export default ContentMain;
