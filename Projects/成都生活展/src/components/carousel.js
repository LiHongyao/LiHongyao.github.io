import React, {Component} from 'react';
import { Carousel } from 'antd';
import '../styles/carousel.css';

class HCarousel extends Component {
    render() {
        return (
            <Carousel autoplay>
                {
                    this.props.imgNames.map((imgName,index) => {
                        return (
                            <div key={index}>
                                <img src={require('../asserts/' + imgName)} alt=''/> 
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }
} 

export default HCarousel;