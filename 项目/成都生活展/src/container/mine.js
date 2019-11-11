import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import '../styles/mine.css';
import {
  Icon
} from 'antd';

class Mine extends Component {
  handleCancellation() {
    this.props.history.replace('/');
  }
  render () {
    const infos = [
      [
        {title: '钱包', type: 'wallet'},
        {title: '发现', type: 'search'},
        {title: '分享', type: 'share-alt'},
        {title: '指南', type: 'compass'},
        {title: '礼物', type: 'gift'},
      ],
      [
        {title: '设置', type: 'setting'},
        {title: '收藏', type: 'star-o'}
      ],
    ]
    return (
      <div id='app' className='mine'>
        <NavigtaionBar title='我的' />
        <main className='content'>
          {/* infos */}
          <div className='info-box' style={{'background': 'url(' + require('../asserts/bg.jpeg') + ') no-repeat center center'}}>
            <div className='head-portrait' style={{'background': 'url(' + require('../asserts/head-portrait.JPG') + ') no-repeat center top'}}></div>
            <p className='nikename'>追风少年</p>
            <p className='signature'>照见五蕴皆空，度一切苦厄。</p>
          </div>
          {/* 工具 */}
          <div className='tool-box'>
          {
            infos.map((groupList, index) => {
              return (
                <ul key={index} className='tool-list'>
                  {
                    groupList.map((obj) => {
                      return (
                        <li key={obj.title}>
                          <div className='box'>
                            <Icon className='icon' type={obj.type}></Icon>
                            <span className='text'>{obj.title}</span>
                          </div>
                          <Icon type="right" />
                        </li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
          </div>
          <div className='cancellation' onClick={this.handleCancellation.bind(this)}>注销登陆</div>
        </main>
        <TabBar />
      </div>)
  }
}

export default Mine;
