import React from "react";
import "./NavigationBar.css";
export default class NavigationBar extends React.Component {
    render() {
        return <header className="navigation-bar">
            {this.props.title}
        </header>
    }
}
