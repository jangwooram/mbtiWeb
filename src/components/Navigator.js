import {Component} from "react";

class Navigator extends Component {
    render() {
        console.log('navigator rendor')
        let data = this.props.data;
        let i = 0;
        let lists = [];
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                       data-id={data[i].id}
                       href={"/content/"+data[i].id}>{data[i].title}</a>
                </li>
            )
            i += 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default Navigator;
