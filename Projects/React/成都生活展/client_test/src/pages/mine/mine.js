import React from "react";

import { connect } from 'react-redux';
import { UPDATE_TITLE } from "../../store/actions";
const mapDispatchToProps = dispatch => ({
  UPDATE_TITLE: title => {
    dispatch(UPDATE_TITLE(title));
  }
})

class Mine extends React.Component {
    componentDidMount() {
        this.props.UPDATE_TITLE("我的");
    }
    render() {
        return <div className="page mine">个人中心</div>
    }
}

export default connect(null, mapDispatchToProps)(Mine);