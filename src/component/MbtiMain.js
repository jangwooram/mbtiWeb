import {Component} from "react";
import './MbtiMain.css';
import HeaderMain from "./Header-main";
import ContentMain from "./Content-main";
import NoticeBoard from "./Notice-board";

class MbtiMain extends Component {
    render() {
        return (
            <div className="wrap">
                <HeaderMain/>
                <ContentMain/>
                <NoticeBoard/>
            </div>
        );
    }
}

export default MbtiMain;
