import React from 'react';
import './app-header.css';
import "font-awesome/css/font-awesome.min.css";
import Icon from "react-fontawesome";
import { useHistory } from 'react-router-dom';

const AppHeader = (props) => {
    // 读取历史记录对象
    const history = useHistory();
    // Events
    const handleGoBack = () => {
        history.go(-1);
    }
    return props.visible ? (
        <div className='app-header'>
            {
                props.btnVisible ? (
                    <figure onClick={handleGoBack}>
                        <Icon name='angle-left' style={{ fontSize: '18px', marginRight: '4px' }} />
                        <span>返回</span>
                    </figure>
                ) : null
            }
            <h3 className='title'>{props.title}</h3>
        </div>
    ) : null
}

export default AppHeader;