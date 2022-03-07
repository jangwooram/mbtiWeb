import {Component} from "react";
import './Header-main.css';
import { FaSearch } from 'react-icons/fa';


class HeaderMain extends Component {
    render() {
        return(
            <div className="Header">
                <div className="Logo">
                    <a href="#">
                        <img src={require('./images/mbtiLogo.png')} alt=""/>
                    </a>
                </div>
                <div className="searchBar">
                    <input type="text" size={50} placeholder={"관심있는 내용을 검색해보세요!"}/>
                    <FaSearch className="searchIcon"/>
                </div>
                <div className="login">
                    <button>로그인</button>
                </div>
            </div>
        );
    }
}

export default HeaderMain;
