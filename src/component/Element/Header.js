import {Link} from "react-router-dom";

function HomeHeader(props) {
    /**
     * 커뮤니티 메인 헤더 컴포넌트 
     * 모든페이지에서 항상 include된다.
     */
    let info = props.loginPageInfo;
    //console.log('info----',info)


    return (
        <div className="Header horizontal">
             <div id="Logo">
                <Link to='/'>
                    <span>~대충로고~</span>
                </Link>
            </div>
            <div className="Tab">
                <Link to='/'>
                    <span>~홈~</span>
                </Link>
            </div>
            <div className="Tab">
                <Link to='/'>
                    <span>~콜로세움~</span>
                </Link>
            </div>
            <div className="Tab">
                <Link to='/'>
                    <span>~게시판~</span>
                </Link>
            </div>
            <div className="Tab">
                <Link to='/'>
                    <span>~평가~</span>
                </Link>
            </div>
        </div>
    );
}

export default HomeHeader;
