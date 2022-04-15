import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import instance from "../ApiController";
import {useParams} from "react-router-dom";
import {Button, Pagination, TableHead} from "@mui/material";


function ArticleList(props) {
    const {category} = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL;
    const [articles, setArticles] = useState([]);
    const [totalCount, setTotalCount] = useState([]);
    const [pageNum, setPageNum] = useState(() => JSON.parse(window.localStorage.getItem("pageNum")) || 1);
    useEffect(() => {
        window.localStorage.setItem("pageNum", JSON.stringify(pageNum));
    }, [pageNum]);
    useEffect(() => {
        async function getArticles() {
            try {
                const r = await instance.get(baseurl + '/api/v1/articles/list/' + category + '/?offset=' + pageNum + '&limit=' + showList);
                setTotalCount(r.data.total_count);
                setArticles(r.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getArticles();
    }, []);

    let showList = 3; // 보여지는 리스트 개수
    let totalPage = 1;
    let pageCount = function () {
        if (totalCount < 3) {
            totalPage = 1;
            return;
        }
        if (totalCount % showList === 0) {
            totalPage = parseInt(totalCount / showList);
        }
        totalPage = parseInt(totalCount / showList + 1);
    }
    pageCount();

    const columns = [
        {id: '타입', label: '타입', minWidth: "10%"},
        {id: '제목', label: '제목', minWidth: "60%"},
        {id: '작성자', label: '작성자', minWidth: "10%"},
        {id: '작성시간', label: '작성시간', minWidth: "20%"}
    ];

    function linkClick(id) {
        window.location.href = '/ArticleDetail/' + id;
    }

    const handleChange = (event, value) => {
        document.location.href = '/ArticleList/'+category+'/'+'?offset='+value;
        setPageNum(value);
    };
console.log(pageNum);
    function articleCreate() {
        window.location.href = '/ArticleCreate/';
    }

    const titleList = ['INTJ 용의주도한 전략가', 'INTP 논리적인 사색가', 'ENTJ 대담한 통솔자', 'ENTP 뜨거운 논쟁을 즐기는 변론가',
        'INFJ 선의의 옹호자', 'INFP 열정적인 중재자', 'ENFJ 정의로운 사회운동가', 'ENFP 재기발랄한 활동가', 'ISTJ 청렴결백한 논리주의자',
        'ISFJ 용감한 수호자', 'ESTJ 엄격한 관리자', 'ESFJ 사교적인 외교관', 'ISTP 만능 재주꾼', 'ISFP 호기심 많은 예술가', 'ESTP 모험을 즐기는 사업가',
        'ESFP 자유로운 영혼의 연예인'];
    const subTitleList = [
        '상상력이 풍부하며 철두철미한 계획을 세우는 전략가형.',
        '끊임없이 새로운 지식에 목말라 하는 혁신가형.',
        '대담하면서도 상상력이 풍부한 강한 의지의 소유자로 다양한 방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는 리더형.',
        '지적인 도전을 두려워하지 않는 똑똑한 호기심형.',
        '조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자.',
        '상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형.',
        '넘치는 카리스마와 영향력으로 청중을 압도하는 리더형.',
        '창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격으로 사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자.',
        '사실에 근거하여 사고하며 이들의 행동이나 결정 사항에 한 치의 의심을 사지 않는 현실주의자형.',
        '소중한 이들을 수호하는 데 심혈을 기울이는 헌신적이며 성실한 방어자형.',
        '사물이나 사람을 관리하는 데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형.',
        '타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며, 타인을 돕는데 열성적인 세심형.',
        '대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형.',
        '항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는 성격의 매력 넘치는 예술가형.',
        '벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들로 명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 유형.',
        '주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는 연예인형.\n'];
    let title = '';
    let subTitle = '';
    let categoryName = JSON.stringify(category).substr(1, 4);
    let symbolTag = '';

    function titleInfo(e) {
        for (let i = 0; i < e.length; i++) {
            if (e[i].substr(0, 4) === categoryName) {
                title = e[i];
                subTitle = subTitleList[i];
            }
        }
        switch (categoryName) {
            case 'INTJ':
            case 'INTP':
            case 'ENTJ':
            case 'ENTP':
                symbolTag = '825e94';
                break;
            case 'INFJ':
            case 'INFP':
            case 'ENFJ':
            case 'ENFP':
                symbolTag = '339d71';
                break;
            case 'ISTJ':
            case 'ISFJ':
            case 'ESTJ':
            case 'ESFJ':
                symbolTag = '3e91ab';
                break;
            case 'ISTP':
            case 'ISFP':
            case 'ESTP':
            case 'ESFP':
                symbolTag = 'dcaa3d';
                break;
        }
    }

    titleInfo(titleList);

    return (
        <div>
            <div style={{
                textAlign: 'left',
                borderTop: '1px solid #ccc',
                borderBottom: '1px solid #ccc',
                margin: '20px auto',
                color: '#' + symbolTag
            }}>
                <div style={{width: '850px', margin: 'auto', display: 'flex', justifyContent: 'center'}}>
                    <img style={{height: '56px', marginTop: '46px', }}
                         src={process.env.PUBLIC_URL + '/img/icon' + categoryName + '.png'}
                         alt=""/>
                    <div>
                        <p style={{wordBreak: 'keep-all', marginTop: '44px', width: '607px', fontSize:'16px'}}><span
                            style={{display: 'block', fontWeight: 'bold', fontSize: '36px'}}>{title}</span>
                            {subTitle}</p>
                    </div>
                    <img style={{height: '154px'}} src={process.env.PUBLIC_URL + '/img/symbol' + symbolTag + '.png'}
                         alt=""/>
                </div>
            </div>


            <TableContainer component={Paper}>
                <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow sx={{background: '#e7e7e7'}}>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles
                            .map((article) => (
                                <TableRow onClick={(e) => {
                                    linkClick(article.id)
                                }} key={article.id} hover={true} style={{cursor: 'pointer'}}>
                                    <TableCell style={{width: '10%'}} component="th" scope="row">
                                        {article.category}
                                    </TableCell>
                                    <TableCell style={{width: '60%'}} component="th" scope="row">
                                        {article.title}
                                    </TableCell>
                                    <TableCell style={{width: '10%', textAlign: "left"}} align="right">
                                        {article.author}
                                    </TableCell>
                                    <TableCell style={{width: '15%', textAlign: "left"}} align="right">
                                        {article.created_at}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4} style={{textAlign: "center", margin: 'auto'}}>
                                <Button sx={{float: 'right', marginLeft: '30px'}} variant="contained"
                                        onClick={articleCreate}
                                >글쓰기</Button>
                                <Pagination sx={{float: 'right'}}
                                            count={totalPage} page={pageNum} onChange={handleChange} shape="rounded"/>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ArticleList;
