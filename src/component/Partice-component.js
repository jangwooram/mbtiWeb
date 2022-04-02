import React, {useState, useEffect} from "react";
import Movies from "./Movies";

function ParticeComponent() {
    /*
        const submitDate = (event) => {
            if(event.keyCode === 13) {
                onSubmit();
            }
        }

        const onSubmit = () => {
            console.log('로그인 정보 ',Username, Password);
            alert("enter")
        }*/
    /*  텍스트 변경하기
        const [text, setText] = useState('hello');
        const updateText = () => {
            setText('안녕');
        }*/

    /*const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');*/

    /*useEffect(() => {
        console.log(count)
    },[count])

    useEffect(() => {
        console.log('한번만 렌더링')
    }, []) /!*배열을 빈공간으로 두면 한번만 렌더링함*!/*/
    /*
        const [condition, setCondition] = useState(false);
        const toggle = () => {
            setCondition(!condition)
        }
        const renderBtn = condition ? <div>true</div> : <div>false</div>*/


    const [movieTitle, setMovieTitle] = useState('');
    const [movieSince, setMovieSince] = useState('');
    const [movie, setMovie] = useState([
        {title: 'wooram1', since: 1992},
        {title: 'wooram2', since: 1993},
        {title: 'wooram3', since: 1994},
    ]);
    const movieMap = movie.map(movies => {
        return(
            <Movies movieName={movies} key={movies.id} />
        )
    })

    const addMovie = (e) => {
        e.preventDefault();
        setMovie([...movie,{
            title: movieTitle,
            since: movieSince,
        }]);
        setMovieTitle('');
        setMovieSince('');
    }

    return (
        <div>
            {/*<form onSubmit={onSubmit} action="">
            <input
                placeholder={"username"}
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
            /><br/>
            <input
                placeholder={"Password"}
                value={Password}
                onChange={(e)=> setPassword(e.target.value)}
            /><br/>
            <button type={"submit"}>Login</button>
            </form>*/}
            {/* 텍스트 변경하기
             <span>{text}</span>
            <button onClick={updateText}>updeate</button>*/}
            {/*
            <Pratice2 subClick={"clickCount"} />
            <Pratice2/>
            <Pratice2/>*/}
            {/*<h1>test text</h1>
            {renderBtn}
            <button onClick={toggle}>toggle</button>*/}
            {/*<form onSubmit={addMovie}>
                <input type="text"
                       value={movieTitle}
                       placeholder={"영화제목"}
                       onChange={event => setMovieTitle(event.target.value)}/>
                <input type="text"
                       placeholder={"개봉년도"}
                       onChange={event => setMovieSince(event.target.value)}/>
                <button>영화추가</button>
            </form>
            {movieMap}*/}
        </div>
    );

}

export default ParticeComponent;
