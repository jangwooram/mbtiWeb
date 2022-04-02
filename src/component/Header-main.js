import {Link} from "react-router-dom";
import './Header-main.css';
import {FaSearch} from 'react-icons/fa';


function HeaderMain(props) {

    console.log(props.loginInfo);
    let loginBtn = document.getElementById('LoginPage');

    if (props.loginInfo) {
        loginBtn.style.display = "none";
    }

    const loginBtnChange = function (){
        props.setLoginInfo(false);
        loginBtn.style.display = "block";
    }

    const onSubmit = function () {
        alert("엔터누름")
    }
    const onKeyUp = function (event) {
        if (event.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="Header">
            <div id="Logo" onClick={loginBtnChange}>
                <Link to='/'>
                    <img src={require('./images/mbtiLogo.png')} alt=""/>
                </Link>
            </div>
            <div className="searchBar">
                <input onKeyUp={onKeyUp} type="text" size={50} placeholder={"관심있는 내용을 검색해보세요!"}/>
                <FaSearch onClick={onSubmit} className="searchIcon"/>
            </div>
            <div className="login">
                <Link id="LoginPage" to="/LoginPage">
                    <button id="loginBtn">로그인</button>
                </Link>
            </div>
        </div>
    );
}

export default HeaderMain;
