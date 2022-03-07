import {Component} from "react";

class Content extends Component {
    render() {
        console.log('content rendor')
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </div>
        );
    }
}

export default Content;
