import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import HCarousel from '../components/carousel'
import Model from '../models';
import '../styles/home.css';
class Home extends Component {
  render () {
    // 获取数据
    const datas = Model.get('home');
    return (
      <div id='app'>
        <NavigtaionBar title='乐行于蜀' />
        <main className='content'>
          {/* 轮播图 */}
          <HCarousel imgNames={datas.imgNames} />
          {/* 图文显示 */}
          <p className='text'>{datas.texts[0]}</p>
          <img className='img' src={require('../asserts/' + datas.imgNames[1])} alt=''/>
          <p className='text'>{datas.texts[1]}</p>
          <img className='img' src={require('../asserts/' + datas.imgNames[2])} alt=''/>
          <p className='text'>{datas.texts[2]}</p>
        </main>
        <TabBar />
      </div>)
  }
}

export default Home;