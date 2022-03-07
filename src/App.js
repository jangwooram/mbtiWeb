import './App.css';
import Content from "./components/Content";
import {Component} from "react";
import Navigator from "./components/Navigator";
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "read",
            selectedContentId:2,
            welcome: {title : "welcome", desc : "hello react"},
            subject : {title:"web", sub: "world wide web"},
            navi: [
                {id:1, title: "HTML", desc: "HTML is 하이퍼 텍스트 마크업 랭귀지..."},
                {id:2, title: "CSS", desc: "CSS is 캐스캐이팅 스타일 시트..."},
                {id:3, title: "JavaScript", desc: "JS is 자바스크립트..."}
            ]
        }
    }

    render() {
        console.log('app rendor')
        let _title, _desc = null;
        if (this.state.mode ==="welcome"){
            _title = this.state.welcome.title
            _desc = this.state.welcome.desc
        } else if (this.state.mode === "read") {
            let i = 0;
            while (i < this.state.navi.length) {
                let data = this.state.navi[i];
                if (data.id === this.state.selectedContentId){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i+=1
            }
        }
        return (
            <div className="App">
                <Subject onChangePage={function () {
                    this.setState({mode:"welcome"})
                }.bind(this)} title={this.state.subject.title} sub={this.state.subject.sub}/>
                <Subject title={"react"} sub={"for ui"}/>
                <Navigator onChangePage={function (id) {
                    this.setState({mode:"read", selectedContentId:parseInt(id)})
                }.bind(this)} data={this.state.navi}/>
                <Content title={_title} desc={_desc}/>
            </div>
        );
    }
}

export default App;
