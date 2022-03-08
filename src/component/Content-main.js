import React,{ useState } from "react";
import './Content-main.css'

function ContentMain() {
        let mbtiName = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ",
            "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
        let nameList = [];
        let i = 0;
        while (i < mbtiName.length) {
            if (i < 4) {
                nameList.push(
                    <div className="board">
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon-'+(i+1)+'.png'} alt=""/></div>
                        <div className="text purple-color">{mbtiName[i]}</div>
                    </div>
                )
            } else if (i < 8) {
                nameList.push(
                    <div className="board">
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon-'+(i+1)+'.png'} alt=""/></div>
                        <div className="text green-color">{mbtiName[i]}</div>
                    </div>
                )
            }else if (i< 12) {
                nameList.push(
                    <div className="board">
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon-'+(i+1)+'.png'} alt=""/></div>
                        <div className="text blue-color">{mbtiName[i]}</div>
                    </div>
                )
            } else {
                nameList.push(
                    <div className="board">
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon-'+(i+1)+'.png'} alt=""/></div>
                        <div className="text yellow-color">{mbtiName[i]}</div>
                    </div>
                )
            }
            i += 1;
        }


        return (
            <div className="contents">
                <div className="mbti-board">
                    {nameList}
                </div>
            </div>
        );
}

export default ContentMain;
