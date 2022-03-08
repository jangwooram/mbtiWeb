import React, {useState} from "react";

function ParticeComponent() {

    const submitDate = (event) => {
        if(event.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        console.log('로그인 정보 ',Username, Password);
        alert("enter")
    }
/*  텍스트 변경하기
    const [text, setText] = useState('hello');
    const updateText = () => {
        setText('안녕');
    }*/

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <div>
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
            {/* 텍스트 변경하기
             <span>{text}</span>
            <button onClick={updateText}>updeate</button>*/}
        </div>
    );

}

export default ParticeComponent;
