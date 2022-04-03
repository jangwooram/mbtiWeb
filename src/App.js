import './App.css';
import HeaderMain from "./component/Header-main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentMain from "./component/Content-main";
import LoginPage from "./component/LoginPage";
import React, {useEffect, useState} from "react";
import ArticleListPage from "./component/ArticleListPage";
import SignUp from "./component/SignUp";

function App() {
    const [loginInfo,setLoginInfo] = useState(false);
    console.log("asdasd",loginInfo);
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <HeaderMain loginInfo={loginInfo} setLoginInfo={setLoginInfo}/>
                <Routes>
                    <Route exact path='/' element={<ContentMain/>}/>
                    <Route exact path='/LoginPage' element={<LoginPage setLoginInfo={setLoginInfo}/>} />
                    <Route exact path='/SingUp' element={<SignUp/>}/>
                    <Route exact path='/test'/>
                    <Route exact path='/ArticleListPage' element={<ArticleListPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
