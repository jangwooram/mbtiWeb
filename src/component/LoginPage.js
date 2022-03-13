import React,{useState} from "react";

function LoginPage() {

    const submitDate = (event) => {
        if(event.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        console.log('로그인 정보 ',Username, Password);
        alert("enter")
    }
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    return(
        <div>
            <h1>login page</h1>
        </div>
        /*<div>
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
        </div>*/
    );
}

export default LoginPage;
