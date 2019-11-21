import React from "react";
import { BASE_URL } from "../../util";
import "./scenic-spot.css";

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
            this.setState({
                data
            })
        })
    }
    componentDidMount() {
        this.request();
        this.props.UPDATE_TITLE("景点");
    }
    // => methods
    handleItemClick(item) {
        this.props.INFOS(item);
        this.props.history.push("/details");
    }
    // => render
    render() {
        let data = this.state.data;
        return <div className="page senic-spot ">
            {
                data.map((item, index) => {
                    return <section className="item" key={index} onClick={() => {this.handleItemClick(item)}}>
                        <img src={BASE_URL + "/images/" + item.logo} alt=""/>
                        <div className="infos">
                            <p className="title">{item.title}</p>
                            <p className="tel">{item.tel}</p>
                            <p className="address">{item.address}</p>
                        </div>
                    </section>
                })
            }
        </div>
    }
}

export default connect(null, mapDispatchToProps)(ScenicSpot);