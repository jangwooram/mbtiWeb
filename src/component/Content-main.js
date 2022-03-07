import {Component} from "react";
import './Content-main.css'

class ContentMain extends Component {
    render() {
        return(
            <div className="contents">
                <div className="mbti-board">
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text purple-color">ENFJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text purple-color">ENFP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text blue-color">ENTJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text blue-color">ENTP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text green-color">ESFJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text green-color">ESFP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text yellow-color">ESTJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text yellow-color">ESTP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text purple-color">INFJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text purple-color">INFP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text blue-color">INTJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text blue-color">INTP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text green-color">ISFJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text green-color">ISFP</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text yellow-color">ISTJ</div>
                    </div>
                    <div className="board">
                        <div className="icon"></div>
                        <div className="text yellow-color">ISTP</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentMain;
