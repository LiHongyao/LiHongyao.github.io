import React from "react";
import "./mine.css";
import FontAwesome from "react-fontawesome";


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
        let fns = [
          {icon: "cog", text: "设置"},
          {icon: "bell", text: "通知"},
          {icon: "tags", text: "收藏"},
          {icon: "telegram", text: "发现"}
        ]
        return <div className="page mine">
          {/* 信息展示 */}
          <div className="info-box">
            <div className="head-portrait"></div>
            <p className="nickname">木子李</p>
            <p className="autograph">曾经沧海难为水，除却巫山不是云。</p>
          </div>
          {/* 功能列表 */}
          <ul className="fn-list">
            {fns.map((item, index) => {
              return <li key={index}>
                <div className="l">
                  <FontAwesome name={item.icon}/>
                  {item.text}
                </div>
                <FontAwesome name="angle-right"/>
              </li>
            })}
          </ul>
          {/* 注销 */}
          <div className="logout">注销</div>
        </div>
    }
}

export default connect(null, mapDispatchToProps)(Mine);