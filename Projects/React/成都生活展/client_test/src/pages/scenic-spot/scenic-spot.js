import React from "react";
import { BASE_URL } from "../../util";

import { connect } from 'react-redux';
import { UPDATE_TITLE } from "../../store/actions";
const mapDispatchToProps = dispatch => ({
  UPDATE_TITLE: title => {
    dispatch(UPDATE_TITLE(title));
  }
})

class ScenicSpot extends React.Component {
    // =>constructor
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // => methods
    request() {
        fetch(`${BASE_URL}/scenic-spot`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({
                data
            })
        })
    }
    componentDidMount() {
        this.request();
        this.props.UPDATE_TITLE("景点");
    }
    // => render
    render() {
        return <div className="page scenic-spot">景点</div>
    }
}

export default connect(null, mapDispatchToProps)(ScenicSpot);