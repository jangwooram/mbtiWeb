import {Link} from "react-router-dom";
import './Header-main.css';
import {FaSearch} from 'react-icons/fa';
import {useEffect} from "react";


function HeaderMain(props) {
    let info = props.loginPageInfo;
    console.log('info----',info)

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
             <div id="Logo">
                <Link to='/'>
                    <img src={require('./images/mbtiLogo.png')} alt=""/>
                </Link>
            </div>
            <div className="searchBar">
                <input onKeyUp={onKeyUp} type="text" size={50} placeholder={"관심있는 내용을 검색해보세요!"}/>
                <FaSearch onClick={onSubmit} className="searchIcon"/>
            </div>
            {info || <div className="login">
                <Link id="LoginPage" to="/LoginPage">
                    <button id="loginBtn">로그인</button>
                </Link>
            </div>}
        </div>
    );
}

export default HeaderMain;
