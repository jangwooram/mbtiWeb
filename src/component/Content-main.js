import {Component} from "react";
import './Content-main.css'

class ContentMain extends Component {
    render() {
        let mbtiName = ["ENTJ","ENTP","ESFJ","ESTJ","ENFJ","ENFP","ESFP",
            "ESTP","INTJ","INTP","ISFJ","ISTJ","INFJ","INFP","ISFP","ISTP"]
        let nameList=[];
        let i=0;
        while (i<mbtiName.length){
            nameList.push(
                <div className="board">
                    <div className="icon"/>
                    <div className="text purple-color">{mbtiName[i]}</div>
                </div>
            )
            i+=1
        }
        return(
            <div className="contents">
                <div className="mbti-board">
                    {nameList}
                </div>
            </div>
        );
    }
}

export default ContentMain;
