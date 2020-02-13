import React from 'react';
// 引入样式
import './app-footer.css';
import "font-awesome/css/font-awesome.min.css";
// 引入组件
import Icon from "react-fontawesome";
import {
    NavLink as Link
} from 'react-router-dom';

const AppFooter = (props) => {
    const links = [
        { path: '/', title: '乐行于蜀', icon: 'home' },
        { path: '/recommend', title: '推荐', icon: 'thumbs-o-up' },
        { path: '/scenic-spot', title: '景点', icon: 'suitcase' },
        { path: '/mine', title: '我的', icon: 'user' },
    ];
    // visible：判断是否显示标签栏
    return props.visible ? (
        <div className='app-footer' >
            {
                links.map((item, index) => {
                    return (
                        <Link to={item.path} exact key={index}>
                            {/* 图标 */}
                            <Icon name={item.icon} />
                            {/* 标题 */}
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </div>
    ) : null;
}

export default AppFooter;