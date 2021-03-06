import React from "react";
import { BASE_URL } from "../../util";
import "./recommend.css";

import { connect } from 'react-redux';
import { UPDATE_TITLE, INFOS } from "../../store/actions";
const mapDispatchToProps = dispatch => ({
  UPDATE_TITLE: title => {
    dispatch(UPDATE_TITLE(title));
  },
  INFOS: infos => {
    dispatch(INFOS(infos));
  }
})

class Recommend extends React.Component {
    // => constructor
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    // => methods
    request() {
        fetch(`${BASE_URL}/recommend`).then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                data
            })
        });
    }
    handleItemClick(item) {
        this.props.INFOS(item);
        this.props.history.push("/details");
    }
    componentDidMount() {
        this.request();
        this.props.UPDATE_TITLE("推荐");
    }
    // => render
    render() {
        return <div className="page recommend">
            {
                this.state.data.map((item, index) => {
                    return <img src={BASE_URL + "/images/" + item.logoImage} alt="" key={index} onClick={(e) => { this.handleItemClick(item) }}/>
                })
            }
        </div>
    }
}

export default connect(null, mapDispatchToProps)(Recommend);