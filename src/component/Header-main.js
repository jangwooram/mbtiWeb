import {Link} from "react-router-dom";
import './Header-main.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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

    return (
        <div className="Header">
             <div id="Logo">
                <Link to='/'>
                    <img style={{width:'364px'}} src={require('../assets/img/SRGB.png')} alt=""/>
                </Link>
            </div>
            <div className="searchBar">
                <Box sx={{ display: 'flex', alignItems: 'flex-end','& .MuiTextField-root': {m: 1, width: '100%'}}}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="원하는 키워드를 검색하세요" variant="standard" onKeyUp={onKeyUp}/>
                </Box>
            </div>
            {info || <div className="login">
                <Link id="SignIn" to="/SignIn">
                    <IconButton aria-label="accountCircle">
                        <AccountCircleIcon fontSize='large'/>
                    </IconButton>
                </Link>
            </div>}
        </div>
    );
}

export default HeaderMain;
