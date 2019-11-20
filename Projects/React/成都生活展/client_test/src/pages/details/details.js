import React from "react";
import { connect } from 'react-redux';
import { UPDATE_TITLE,IS_SHOW_TABBAR } from "../../store/actions";
const mapDispatchToProps = dispatch => ({
  UPDATE_TITLE: title => {
    dispatch(UPDATE_TITLE(title));
  },
  IS_SHOW_TABBAR: show => {
    dispatch(IS_SHOW_TABBAR(show));
  },
})

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.UPDATE_TITLE("详情");
        this.props.IS_SHOW_TABBAR(false);
    }
    componentWillUnmount() {
        console.log(111);
        this.props.IS_SHOW_TABBAR(true);
    }
    // => render
    render() {
        return <div className="page details"></div> 
    }
}


export default connect(null, mapDispatchToProps)(Details);