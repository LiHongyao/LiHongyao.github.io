import React from "react";
import { BASE_URL } from "../../util";
import Swiper from "swiper/js/swiper"
import "swiper/css/swiper.css"
import "./home.css";

import { connect } from 'react-redux';
import { UPDATE_TITLE } from "../../store/actions";
const mapDispatchToProps = dispatch => ({
    UPDATE_TITLE: title => {
        dispatch(UPDATE_TITLE(title));
    }
})

class Home extends React.Component {
    // => constructor
    constructor(props) {
        super(props);
        this.state = {
            data: {
                images: [],
                texts: []
            }
        }
    }
    // => mount
    componentDidMount() {
        // ajax
        this.request();
        this.props.UPDATE_TITLE("乐行于蜀");
    }
    // => methods
    request() {
        fetch(`${BASE_URL}/home`).then(response => {
            return response.json()
        }).then(data => {
            // 更新状态
            this.setState({ data }, () => {
                new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        bulletActiveClass: "bullet-active"
                    }
                })
            })
        });
    }
    // => render
    render() {
        let images = this.state.data.images;
        let texts = this.state.data.texts;
        return <div className="page home">
            {/* 轮播图 */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {images.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <img src={BASE_URL + "/images/" + item} alt=""></img>
                        </div>
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
            {/* 图文混排 */}
            <div className="wrapper">
                {
                    texts.map((text, index) => {
                        return <div className="item" key={index}>
                            <p>{text}</p>
                            <img src={BASE_URL + "/images/" + images[index]} alt=""></img>
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default connect(null, mapDispatchToProps)(Home);