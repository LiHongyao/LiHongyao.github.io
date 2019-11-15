import React, {Component} from 'react';
import '../styles/tabbar.css';
import {
    NavLink
} from 'react-router-dom';
import {
    Icon
} from 'antd';

class TabBar extends Component {

    render() {
        let infos = [
            {title:'乐行于蜀', path: '/home', type:'home'},
            {title:'推荐', path: '/recommended', type:'ant-design'},
            {title:'景点', path: '/attractions', type:'eye'},
            {title:'我的', path: '/mine', type:'user'}
        ]
        return (
            <footer className='tabBar'>
               {
                   infos.map((item, index) => {
                       return (
                           <NavLink to={item.path} key={index} className='tabBar-item'>
                                <Icon className='icon' type={item.type} />
                                <span className='title'>{item.title}</span>                    
                           </NavLink>
                       )
                   })
               } 
            </footer>
        )
    }
}
export default TabBar;