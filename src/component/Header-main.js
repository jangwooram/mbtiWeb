import {Link} from "react-router-dom";
import './Header-main.css';
import {FaSearch} from 'react-icons/fa';
import {useEffect} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";


function HeaderMain(props) {
    let info = props.loginPageInfo;
    //console.log('info----',info)

    const onSubmit = function () {
        alert("엔터누름")
    }
    const onKeyUp = function (event) {
        if (event.keyCode === 13) {
            onSubmit();
        }
    }
    const storageClear = function () {
        localStorage.clear();
    }
    return (
        <div className="Header">
             <div id="Logo">
                <Link to='/'>
                    <img style={{width:'364px'}} onClick={storageClear} src={require('./images/SRGB.png')} alt=""/>
                </Link>
            </div>
            <div className="searchBar">
                <input onKeyUp={onKeyUp} type="text" size={50} placeholder={"관심있는 내용을 검색해보세요!"}/>
                <FaSearch onClick={onSubmit} className="searchIcon"/>
            </div>
            {info || <div className="login">
                <Link id="LoginPage" to="/LoginPage">
                    <IconButton aria-label="accountCircle">
                        <AccountCircleIcon fontSize='large'/>
                    </IconButton>
                    {/*<button id="loginBtn">로그인</button>*/}
                </Link>
            </div>}
        </div>
    );
}

export default HeaderMain;
