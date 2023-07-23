import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@mui/material";
import Typography from "@mui/material/Typography";


const rows = [
    {"id":343, "content": "그럴거면 그냥 결혼해라", "like":98, "dislike":12, "user_mbti":"INFP"},
    {"id":344, "content": "깻잎이 뭔 대수냐 아까워서 잡아준거다", "like":98, "dislike":12, "user_mbti":"ENTP"}
];
function CommentList() {
    /**
     * 논쟁 댓글 
     */
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.content}
                        </TableCell>
                        <TableCell>{row.user_mbti}</TableCell>
                        <TableCell>{row.like}</TableCell>
                        <TableCell>{row.dislike}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CommentList;