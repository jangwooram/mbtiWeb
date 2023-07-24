import './App.css';
import './component/base.css'
import HomeHeader from "./pages/Home/Header";
import HomeContent from "./pages/Home/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ArticleList from "./component/ArticleList";
import ArticleCreate from "./component/ArticleCreate";

import ArticleDetail from "./component/ArticleDetail";
import Footer from "./pages/Home/Footer";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";

function App() {
    const [loginPageInfo,setLoginPageInfo] = useState(false);

    return (
    <div className="App">
        <BrowserRouter>
            <HomeHeader loginPageInfo={loginPageInfo} setLoginInfo={setLoginPageInfo}/>
            <Routes>
                <Route exact path='/' element={<HomeContent setLoginInfo={setLoginPageInfo}/>}/>
                <Route exact path='/SignIn' element={<SignIn loginInfo={loginPageInfo} setLoginPageInfo={setLoginPageInfo}/>} />
                <Route exact path='/SignUp' element={<SignUp/>}/>
                <Route exact path='/ArticleList/:category' element={<ArticleList/>}/>
                <Route exact path='/ArticleCreate' element={<ArticleCreate/>}/>
                <Route exact path='/ArticleDetail/:article_id' element={<ArticleDetail/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
