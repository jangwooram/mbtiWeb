import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';


function AboutContent(props) {
    /**
     * 홈페이지 대문 컴포넌트
     */
    const {mbti} = useParams();
    const iconurl = `${process.env.PUBLIC_URL}/img/icon/icon${mbti}.png`;

    const words = [
        {
          text: 'told',
          value: 64,
        },
        {
          text: 'mistake',
          value: 11,
        },
        {
          text: 'thought',
          value: 16,
        },
        {
          text: 'bad',
          value: 17,
        },
      ]

    return (
        <div className="wrapper">
            <div>
            </div>
            <div className="container horizontal" style={{"background": "grey"}}>
                <div className="profile w_one_third" style={{"background":"red"}}>
                    <div>
                        <img style={{height: '154px'}} src="https://dummyimage.com/600x400/000/fff" alt=""/>
                    </div>
                    <div>
ENTP는 특유의 능글거리면서 경쾌한 성격과 문제의 본질을 파악하고 논리적으로 판단하려는 기질이 있고, 어느곳에서나 적응력이 빠른 성격이다. 본인이 구상하는 바를 실현시키고 싶어하는 기질이 강하며, 여기에 특유의 아웃사이더적인 성격까지 겹쳐 그야말로 혁명가의 기질을 띠고 있다. 모든 분야에 있어서, 기존의 체제 자체를 뒤집어 버리거나 분야 전체의 도약을 이루어내는 인물들이 많다.

위풍당당하고 논리적인 언행, 당차고 경쾌하며 소신있는 성격, 엉뚱한 모습과 자신감 넘치는 태도, 최상위권의 지능을 활용한 아이디어 및 임기응변, 위트있는 말솜씨 등으로 인해 주변에서 인기가 많고 분위기를 당당하게 주도하며 강강약약 스타일이 된다.

NT(직관사고)형인 만큼 인구수가 적다. 다재다능하고 토론을 좋아하며 항상 다양하고 색다른 환경에서의 업무 및 변화를 추구하는 기질, 발명적이고 혁명가적인 성향 때문에 법조인, 언론인, 정치인, 강사, 엔지니어, 개발자와 같은 대외활동 직군 or 전문직에서 뛰어난 역량을 발휘한다. E(외향) 중에서 가장 지능이 높고, MBTI 중 4위로 지능이 최상위층에 속한다. 그러나 위계질서가 너무 엄격하거나, 스파르타식 교육, 심한 꼰대문화가 팽배한 경직된 사회에는 염증을 느끼고 접근을 안하거나, 아니면 그 사회의 일부를 뒤집어 버리는 모 아니면 도의 케이스다. 평소 자신이 관심 가지던 분야라도 쉽게 질려하는 경향이 커서 여러 분야에 다양하게 손댈 가능성이 높고, 성과를 내는 것 또한 엄청난 성공 아니면 아예 바닥을 찍는 성향이 강하다. 그만큼 성공한 사람들도 많지만 반대로 백수들도 많다는 의미로 통한다.

창작물 에서 주인공일 경우 INTJ, ISTP, INTP, ESTJ, ENTJ, ESTP처럼 혼돈 선/질서 악성향의 안티 히어로/다크 히어로로 설정되는 편이다.
                    </div>
                </div>
                <div className="w_two_third" style={{"background":"blue"}}>
                    <div>
                        해당타입에 대해 한줄코멘트
                    </div>
                    <div>
                        해당타입과의 궁합 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
