import {Component} from "react";
import './Notice-board.css'

class NoticeBoard extends Component {
    render() {
        return (
            <div className="notice-board">
                <div className="notice-title bold">전체 게시글</div>
                <hr/>
                <ul>
                    <li><span className="purple-color bold">ENTJ</span><span>콘트라베이스 콜드브루</span>
                        <span className="text-right">좋아요 <span>0 </span></span><span>댓글 <span>0</span></span></li>
                    <li><span className="blue-color bold">ISTJ</span><span>일규있냐</span><span
                        className="text-right">좋아요 <span>0 </span></span><span>댓글 <span>0</span></span></li>
                    <li><span className="purple-color bold">ENFP</span><span>코카콜라 맛잇어</span><span
                        className="text-right">좋아요 <span>0 </span></span><span>댓글 <span>0</span></span></li>
                    <li><span className="purple-color bold">ENTJ</span><span>제로콜라 개노맛</span><span
                        className="text-right">좋아요 <span>0 </span></span><span>댓글 <span>0</span></span></li>
                    <li><span className="blue-color bold">ISTJ</span><span>오이만세!</span><span
                        className="text-right">좋아요 <span>0 </span></span><span>댓글 <span>0</span></span></li>
                </ul>
            </div>
        );
    }
}

export default NoticeBoard;
