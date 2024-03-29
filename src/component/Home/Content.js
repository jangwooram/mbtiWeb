import React, {useEffect} from "react";
import ArguementHot from "../Argument/Hot";
import BoardHot from "../Board/Hot";
import BoardTagHot from "../Board/TagHot";
import {Link} from "react-router-dom";

function HomeContent(props) {
    /**
     * 홈페이지 대문 컴포넌트
     */

    return (
        <div className="wrapper">
            <ArguementHot/>
            <BoardHot/>
            <BoardTagHot/>
        </div>
    );
}

export default HomeContent;
