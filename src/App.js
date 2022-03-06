import './App.css';
import Content from "./components/Content";
import {Component} from "react";
import Navigator from "./components/Navigator";
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject : {title:"web", sub: "world wide web"},
            navi: [
                {id:1, title: "HTML", desc: "HTML is 하이퍼 텍스트 마크업 랭귀지..."},
                {id:2, title: "CSS", desc: "CSS is 캐스캐이팅 스타일 시트..."},
                {id:3, title: "JavaScript", desc: "JS is 자바스크립트..."}
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}/>
                <Subject title={"react"} sub={"for ui"}/>
                <Navigator data={this.state.navi}/>
                <Content title={"HTML"} desc={"하이퍼 텍스트 마크업 랭귀지"}/>
            </div>
        );
    }
}

export default App;
