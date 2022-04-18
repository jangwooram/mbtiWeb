import React, {useEffect, useState} from "react";
import './LoginPage.css';
import SignIn from "./SignIn";

function LoginPage(props) {

    useEffect(function (){
        props.setLoginPageInfo(true);
    })

    return(
        <div className='loginPage'>
            <SignIn/>
        </div>
    );
}

export default LoginPage;
