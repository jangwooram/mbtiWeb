import {Link} from "react-router-dom";
import img from "../../assets/img";
import {Grid} from "@mui/material";
import {useState} from "react";

function HomeHeader(props) {
    /**
     * 커뮤니티 메인 헤더 컴포넌트
     * 모든페이지에서 항상 include된다.
     */

    const [currentPage, setCurrentPage] = useState('HOME');

    return (
        <div style={headerContainer}>
        <div style={headerNavi} className="Header horizontal">
            <Grid container spacing={1} justifyContent={'flex-start'} alignItems={'flex-end'}>
                <Grid item xs={2} onClick={() => {setCurrentPage('HOME')}}>
                    <Link to='/'>
                        <img src={img.main_logo} style={{width:'100%'}} alt="mainLogo"/>
                    </Link>
                </Grid>
                <Grid item xs={1} justifyContent={'center'}>
                    <Link style={headerTitle} to='/' onClick={() => {setCurrentPage('HOME')}}>
                        <span style={{fontWeight: currentPage === 'HOME' ? 800 : 400}}>홈</span>
                    </Link>
                </Grid>
                <Grid item xs={1} justifyContent={'center'} onClick={() => {setCurrentPage('COLOSSEUM')}}>
                    <Link style={headerTitle} to='/'>
                        <span style={{fontWeight: currentPage === 'COLOSSEUM' ? 800 : 400}}>콜로세움</span>
                    </Link>
                </Grid>
                <Grid item xs={1} justifyContent={'center'} onClick={() => {setCurrentPage('BOARD')}}>
                    <Link style={headerTitle} to='/'>
                        <span style={{fontWeight: currentPage === 'BOARD' ? 800 : 400}}>게시판</span>
                    </Link>
                </Grid>
                <Grid item xs={1} justifyContent={'center'} onClick={() => {setCurrentPage('EVALUATION')}}>
                    <Link style={headerTitle} to='/'>
                        <span style={{fontWeight: currentPage === 'EVALUATION' ? 800 : 400}}>평가</span>
                    </Link>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

const headerContainer = {
    alignItems: 'center', paddingBottom: 30, borderBottom: 1, borderBottomStyle: "solid", borderBottomColor: '#d4d4d4'
}
const headerNavi = {
    width:1140, marginTop: 50,  borderBottomWidth: 1
}
const headerTitle = {
    textDecoration: 'none',
    fontSize: 20,
    color: '#222',
}

export default HomeHeader;
