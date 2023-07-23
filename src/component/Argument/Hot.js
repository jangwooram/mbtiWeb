import React, {useEffect} from "react";
import { BarChart, XAxis, YAxis, Bar, Legend, Cell, ResponsiveContainer } from "recharts";
import Typography from "@mui/material/Typography";

import CommentList from "../Comment/List";
import Hline from "../Element/Hline";
import { width } from "@mui/system";

function ArguementHot(props) {
    /**
     * 핫한 논쟁 컴포넌트
     */
    const data = [
        {name: '된다', percentage: 67, fill:"#8884d8"},
        {name: '안된다', percentage: 33, fill:"#82ca9d"},
    ];

    const legendPayload = data.map(
                            (item, index) => ({
                                id: item.name,
                                type: "square",
                                value: `${item.name}`,
                                color: item.fill
                            }))
      
    return (
        <div className="container">
            <div className="container-header horizontal">
                <Typography variant="h5">메인 매치</Typography>
                <Typography variant="subtitle1">더보기</Typography>
            </div>
            <Hline/>
            <div className="container-body">
                <Typography variant="h6">깻잎논쟁</Typography>
                <div className="horizontal">
                        <ResponsiveContainer width="50%" height={data.length*33 + 100}>    
                            <BarChart data={ data } maxBarSize={ 20 } layout={ 'vertical' }>
                                <Legend align={ 'left' } payload={legendPayload}/>
                                <XAxis type={ 'number' } dataKey="percentage" hide />
                                <YAxis type={ 'category' } dataKey={ 'name' } hide/>
                                <Bar dataKey={ 'percentage' } legendType={ 'circle' } radius={ 5 } label={{position:"insideRight",  fill: 'white', fontSize: 15 }}>
                                    {data.map((entry, index) => (
                                        <Cell key={entry.name} fill={entry.fill}/>
                                    ))}    
                                </Bar>
                                {/* <Bar dataKey={ '안된다' } legendType={ 'circle' } fill={ '#82ca9d' } radius={ 5 } label={{ position:"insideRight",  fill: 'white', fontSize: 15 }}/> */}
                            </BarChart>
                        </ResponsiveContainer>
                        <div style={{width:"50%"}}>
                            <Typography marginTop={2} variant="body1" style={{ wordWrap: "break-word" }}>
                                연인이 이성의 깻잎을 잡아줘도 된다 vs 안된다
                                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                            </Typography>
                        </div>
                </div>
                <div style={{"margin-top":"20px"}}>
                    <CommentList/>
                </div>
            </div>
        </div>
    );
}

export default ArguementHot;
