import React from "react";
import Swiper from "swiper/js/swiper"
import "swiper/css/swiper.css"
import { BASE_URL } from "../../util";
import "./details.css";
import { connect } from 'react-redux';
import { UPDATE_TITLE, IS_SHOW_TABBAR } from "../../store/actions";
const mapStateToProps = state => ({
  infos: state.infos
})
const mapDispatchToProps = dispatch => ({
  UPDATE_TITLE: title => {
    dispatch(UPDATE_TITLE(title));
  },
  IS_SHOW_TABBAR: show => {
    dispatch(IS_SHOW_TABBAR(show));
  },
})

class Details extends React.Component {
  componentDidMount() {
    this.props.UPDATE_TITLE("详情");
    this.props.IS_SHOW_TABBAR(false);
    new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: "bullet-active"
      }
  })
  }
  componentWillUnmount() {
    this.props.IS_SHOW_TABBAR(true);
  }
  // => render
  render() {
    let infos = this.props.infos;
    let images = infos.detailImage ? [infos.detailImage] : infos.imgs;

    return <div className="page details">
      {/* 轮播图 */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images && images.map((item, index) => {
            return <div className="swiper-slide" key={index}>
              <img src={BASE_URL + "/images/" + item} alt=""></img>
            </div>
          })}
        </div>
        {images && images.length <= 1 ? "" : <div className="swiper-pagination"></div>}
      </div>
      {/* 详情信息 */}
      <p className="des">{infos.des}</p>
    </div>
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details);