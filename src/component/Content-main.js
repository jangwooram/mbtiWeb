import {Component} from "react";
import './Content-main.css'

class ContentMain extends Component {
    render() {
        let mbtiName = ["ENTJ", "ENTP", "ESFJ", "ESTJ", "ENFJ", "ENFP", "ESFP",
            "ESTP", "INTJ", "INTP", "ISFJ", "ISTJ", "INFJ", "INFP", "ISFP", "ISTP"];
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
                        <div className="text blue-color">{mbtiName[i]}</div>
                    </div>
                )
            }else if (i< 12) {
                nameList.push(
                    <div className="board">
                        <div className="icon"><img src={process.env.PUBLIC_URL + '/img/icon-'+(i+1)+'.png'} alt=""/></div>
                        <div className="text green-color">{mbtiName[i]}</div>
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
}

export default ContentMain;
