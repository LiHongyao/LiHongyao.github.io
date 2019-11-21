import React from "react";
import "./NavigationBar.css";
import FontAwesome from "react-fontawesome";
import {withRouter} from "react-router-dom";
class NavigationBar extends React.Component {
    // => methods
    handleGoback() {
        this.props.history.go(-1);
    }
    // => render
    render() {
        return <header className="navigation-bar">
            {this.props.show && <FontAwesome className="goback" name="chevron-left" onClick={this.handleGoback.bind(this)}>返回</FontAwesome>}
            {this.props.title}
        </header>
    }
}

export default withRouter(NavigationBar);