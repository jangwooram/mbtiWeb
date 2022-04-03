import './App.css';
import HeaderMain from "./component/Header-main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentMain from "./component/Content-main";
import LoginPage from "./component/LoginPage";
import React, {useEffect, useState} from "react";
import ArticleList from "./component/ArticleList";
import ArticleCreate from "./component/ArticleCreate";
import SignUp from "./component/SignUp";

function App() {
    const [loginPageInfo,setLoginPageInfo] = useState(false);
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <HeaderMain loginPageInfo={loginPageInfo} setLoginInfo={setLoginPageInfo}/>
                <Routes>
                    <Route exact path='/' element={<ContentMain setLoginInfo={setLoginPageInfo}/>}/>
                    <Route exact path='/LoginPage' element={<LoginPage loginInfo={loginPageInfo} setLoginPageInfo={setLoginPageInfo}/>} />
                    <Route exact path='/SingUp' element={<SignUp/>}/>
                    <Route exact path='/ArticleList/:category' element={<ArticleList/>}/>
                    <Route exact path='/ArticleCreate' element={<ArticleCreate/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
