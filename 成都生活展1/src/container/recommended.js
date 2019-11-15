import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import Model from '../models';
import '../styles/recommended.css';

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: Model.get('recommended')
    }
  }
  handleImgClick(event) {
    const index = event.currentTarget.dataset.index;
    // 推送
    this.props.history.push({
      pathname:'/details',
      state: {
        imgs: [this.state.datas[index].detailImage],
        text: this.state.datas[index].des
      }
    });
  }
  render () {
    const datas = this.state.datas;
    return (
      <div id='app'>
        <NavigtaionBar title='推荐' />
        <main className='content'>
          <div className='img-box'>
            {
              datas.map((item, index) => {
                return <img key={index} data-index={index} onClick={this.handleImgClick.bind(this)} src={require('../asserts/' + item.logoImage)} alt=''/>                 
              })
            }
          </div>
        </main>
        <TabBar />
      </div>)
  }
}

export default Recommended;
