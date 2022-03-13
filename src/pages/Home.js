import React from 'react';
import HeaderMain from "../component/Header-main";
import ContentMain from "../component/Content-main";
import NoticeBoard from "../component/Notice-board";
import LoginPage from "../component/LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <HeaderMain/>
                <Routes>
                    <Route exact path='/' element={<ContentMain/>}/>
                    <Route exact path='/LoginPage' element={<LoginPage/>} />
                    <Route exact path='/test'/>
                </Routes>
                <NoticeBoard/>
            </div>
        </BrowserRouter>
    );
};

export default Home;
