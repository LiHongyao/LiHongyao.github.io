import React, {Component} from 'react';
import {
    Icon
} from 'antd';
import '../styles/navigationbar.css';
class NavigationBar extends Component {
    handleGoBackBtn() {
        this.props.history.go(-1);
    }
    render (){
        const goBackBtn = <Icon onClick={this.handleGoBackBtn.bind(this)} className='goback-btn' type="left" />;
        return (
            <header className='navigationBar'>
                {
                    this.props.goBack === true ? goBackBtn : ''
                }
                <h3 className='title'>{this.props.title}</h3>
            </header>
        )
    }
}

export default NavigationBar;
