import React, {Component} from 'react';
import NavigationBar from '../components/navigationbar'
import { Carousel } from 'antd';
import '../styles/details.css'

class Details extends Component {
  render () {
    return (
      <div id='app' className='details'>
        <NavigationBar title='详情页' goBack={true} history={this.props.history}/>
        <main className='content detail-page'>
          {/* 走马灯 */}
          <Carousel>
            {
              this.props.location.state.imgs.map((imgName, index) => {
                return <img key={index} src={require('../asserts/' + imgName)} alt='' />
              })
            }
          </Carousel>
          {/* 文本内容 */}
          <p className='text'>{this.props.location.state.text}</p>
        </main>
      </div>)
  }
}

export default Details;
