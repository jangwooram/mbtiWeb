import React, {useEffect, useState} from "react";
import './LoginPage.css';

function LoginPage(props) {

    useEffect(function (){
        props.setLoginPageInfo(true);
    })

    const onSubmit = function(){
        console.log('로그인 정보 ',Username, Password);
        alert("enter")
    }
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    return(
        <div className='loginPage'>
            <h1>login Page</h1>
            <form onSubmit={onSubmit} action="">
                <input
                    placeholder={"username"}
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <input
                    placeholder={"Password"}
                    value={Password}
                    onChange={(e)=> setPassword(e.target.value)}
                /><br/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
