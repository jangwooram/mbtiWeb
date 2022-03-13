import { Link } from "react-router-dom";
import './Header-main.css';
import {FaSearch} from 'react-icons/fa';
import LoginPage from "./LoginPage";


function HeaderMain() {
    const onSunmit = () => {
        alert("엔터누름")
    }
    const onKeyUp = (event) => {
        if (event.keyCode === 13) {
            onSunmit();
        }
    }
    return (
        <div className="Header">
            <div className="Logo">
                <a href="#">
                    <img src={require('./images/mbtiLogo.png')} alt=""/>
                </a>
            </div>
            <div className="searchBar">
                <input onKeyUp={onKeyUp} type="text" size={50} placeholder={"관심있는 내용을 검색해보세요!"}/>
                <FaSearch onClick={onSunmit} className="searchIcon"/>
            </div>
            <div className="login">
                <Link to="/LoginPage">로그인</Link>
            </div>
        </div>
    );
}

export default HeaderMain;
