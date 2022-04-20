import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {FormControl, InputLabel, MenuItem, NativeSelect, Select} from "@mui/material";
import {useEffect} from "react";



function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [userMbti, setUserMbti] = React.useState('');
    const handleChange = (event) => {
        setUserMbti(event.target.value);
    };
    let mbtiName = ["INTJ", "INTP", "ENTJ", "ENTP", "INFJ", "INFP", "ENFJ",
        "ENFP", "ISTJ", "ISFJ", "ESTJ", "ESFJ", "ISTP", "ISFP", "ESTP", "ESFP"];
    let nameList = [];
    let i=0;

        while (i < mbtiName.length){
            nameList.push(
                <MenuItem sx={{textAlign:'left'}} value={mbtiName[i]}>{mbtiName[i]}</MenuItem>
            )
            i+=1;
        }
    return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgColor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="이름"
                                    name="name"
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-select-small">MBTI</InputLabel>
                                    <Select
                                        defaultValue={'INTJ'}
                                        required
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={userMbti}
                                        label="MBTI"
                                        onChange={handleChange}
                                        sx={{textAlign:'left'}}
                                    >
                                        <MenuItem sx={{textAlign:'left'}} value={'아직모름'}>아직모름</MenuItem>
                                        {nameList}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="nick"
                                    label="닉네임"
                                    name="nick"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            확인
                        </Button>
                    </Box>
                </Box>
            </Container>

    );
}

export default SignUp;
