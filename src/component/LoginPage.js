import React, {useEffect, useState} from "react";
import './LoginPage.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Link from "@mui/material/Link";


function LoginPage(props) {

    useEffect(function (){
        props.setLoginPageInfo(true);
    })

    return(
        <div className='loginPage'>
            <SignIn/>
            <Link to={"/SignUp"}>
                회원가입
            </Link>
        </div>
    );
}

export default LoginPage;
