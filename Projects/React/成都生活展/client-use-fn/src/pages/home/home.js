import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context';
import { api } from '../../util/util'
import { Carousel } from 'antd';
import './home.css';

const Home = () => {
    const { dispatch } = useContext(AppContext);
    const [data, setData] = useState(null);
    // => 修改标题
    useEffect(() => {
        dispatch({ type: 'UPDATE_TITLE', title: '乐行于蜀' });
    }, [dispatch]);
    // => ajax
    useEffect(() => {
        fetch(`${api}/info?type=home`).then(res => res.json()).then(data => { setData(data.data) });
    }, []);
    return (
        <div className='page home'>
            {data && (
                <>
                    <div className='flash'>
                        <Carousel>
                            {
                                data.images.map((image, index) => {
                                    return <img src={`${api}/images/${image}`} key={index} alt='loadding err' />
                                })
                            }
                        </Carousel>
                    </div>
                    <div className='wrapper'>
                        {
                            data.texts.map((text, index) => {
                                return (
                                    <div className='item' key={index}>
                                        <p className='text'>{text}</p>
                                        <img src={`${api}/images/${data.images[index]}`} alt='loadding err'></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )}
        </div>
    )
}
export default Home;