import React, { useContext, useEffect } from 'react';
import AppContext from '../../context';
import { api } from '../../util/util';
import { Carousel } from 'antd';
import './details.css';

const Details = (props) => {
    const { dispatch } = useContext(AppContext);
    // => 读取参数
    const { state } = props.location;
    const { isScenicSpot } = state;
    // => 修改标题
    useEffect(() => {
        dispatch({ type: 'UPDATE_TITLE', title: '详情' });
        dispatch({ type: 'UPDATE_BACKBTN_VISIBLE', flag: true });
        dispatch({ type: 'UPDATE_APPFOOTER_VISIBLE', flag: false });
        return () => {
            // 组件卸载前（离开详情页之前）
            dispatch({ type: 'UPDATE_BACKBTN_VISIBLE', flag: false });
            dispatch({ type: 'UPDATE_APPFOOTER_VISIBLE', flag: true });
        }
    }, [dispatch]);
    return (
        <div className='page details'>
            {/* 图片 */}
            {
                isScenicSpot ? (
                    <Carousel>
                        {
                            state.imgs.map((imgName, index) => {
								return <img src={`${api}/images/${imgName}`} key={index} alt='loading err' />
                            })
                        }
                    </Carousel>
                ) : (
                        <img src={`${api}/images/${state.detailImage}`} alt='loading err' />
                    )
            }

            {/* 内容 */}
            <p className='desc'>{state.des}</p>
        </div>
    )
}
export default Details;

