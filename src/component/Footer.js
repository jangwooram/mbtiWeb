import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{
            height:'100px',
            borderTop:'1px solid #e7e7e7',
            marginTop:'50px',
            textAlign:'center',
            paddingTop:'30px',
            clear:'both',
        }}>
            <p>사용자들이 서로 치고박고 싸우면 좋겠습니다 선생님</p>
            <ul className={'footUl'}>
                <li>오시는길</li>
                <li>법저고지</li>
                <li>기업소개</li>
                <li>FAQ</li>
                <li>ㅉㅉㅉ</li>
            </ul>
        </div>
    );
};

export default Footer;
