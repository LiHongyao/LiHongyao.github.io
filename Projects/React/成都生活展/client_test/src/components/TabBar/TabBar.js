import React from "react";
import { NavLink as Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

import "./TabBar.css";
// => http://fontawesome.dashgame.com/
export default class TabBar extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        return <footer className="tab-bar">
            <Link to="/" exact>
                <FontAwesome name='home' />
                乐行于蜀
            </Link>
            <Link to="/recommend">
                <FontAwesome name='thumbs-o-up' />
                推荐
            </Link>
            <Link to="/scenic-spot">
                <FontAwesome name='suitcase' />
                景点
            </Link>
            <Link to="mine">
                <FontAwesome name='user' />
                我的
            </Link>
        </footer>
    }
}