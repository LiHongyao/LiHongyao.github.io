import React, {Component} from 'react';
import TabBar from '../components/tabbar';
import NavigtaionBar from '../components/navigationbar';
import Model from '../models';
import '../styles/attractions.css';

class Attractions extends Component {

  // 处理用户点击
  handleClick(datas, event) {
    const index = event.currentTarget.dataset.index;
    // 推送
    this.props.history.push({
      pathname:'/details',
      state: {
        imgs: datas[index].imgs,
        text: datas[index].des
      }
    });
  }

  render () {
    const datas = Model.get('attractions');
    return (
      <div id='app'>
        <NavigtaionBar title='景点' />
        <main className='content'>
          <ul className='ct-list'>
            {
              // 列表渲染
              datas.map((item, index) => {
                return (
                  <li key={index} data-index={index} onClick={this.handleClick.bind(this, datas)}>
                    <div className='left-box'>
                      <img src={require('../asserts/' + item.logo)} alt=''/>
                    </div>
                    <div className='right-box'>
                      <h5 className='title'>{item.title}</h5>
                      <p className='tel'>{item.tel}</p>
                      <address className='address'>{item.address}</address>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </main>
        <TabBar />
      </div>)
  }
}
export default Attractions;