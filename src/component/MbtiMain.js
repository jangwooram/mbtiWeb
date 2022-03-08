import {Component} from "react";
import './MbtiMain.css';
import HeaderMain from "./Header-main";
import ContentMain from "./Content-main";
import NoticeBoard from "./Notice-board";
import ParticeComponent from "./Partice-component";

class MbtiMain extends Component {
    render() {
        return (
            <div className="wrap">
                <HeaderMain/>
                <ContentMain/>
                <NoticeBoard/>
                <ParticeComponent/>
            </div>
        );
    }
}

export default MbtiMain;
