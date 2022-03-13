import './App.css';
import HeaderMain from "./component/Header-main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentMain from "./component/Content-main";
import LoginPage from "./component/LoginPage";
import React from "react";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <HeaderMain/>
                <Routes>
                    <Route exact path='/' element={<ContentMain/>}/>
                    <Route exact path='/LoginPage' element={<LoginPage/>} />
                    <Route exact path='/test'/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
