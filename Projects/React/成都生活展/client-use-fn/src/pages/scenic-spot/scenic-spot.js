import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context';
import { api } from '../../util/util';
import './scenic-spot.css';

const ScenicSpot = (props) => {
    const { dispatch } = useContext(AppContext);
    const [data, setData] = useState(null);
    // => 修改标题
    useEffect(() => {
        dispatch({ type: 'UPDATE_TITLE', title: '景点' });
    }, [dispatch]);
    // => 请求数据
    useEffect(() => {
        fetch(`${api}/info?type=scenicSpot`).then(res => res.json()).then(data => { setData(data.data) });
    }, []);
    // => Events
    const handleItemClick = ({ des, imgs }) => {
        props.history.push({
            pathname: '/details',
            state: { des, imgs, isScenicSpot: true }
        });
    }
    return (
        <div className='page scenic-spot'>
            {data && (
                <ul className='list'>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index} onClick={() => { handleItemClick(item) }}>
                                    <img src={`${api}/images/${item.logo}`} alt='loading err' />
                                    <div className='infos'>
                                        <p className='title'>{item.title}</p>
                                        <p className='tel'>{item.tel}</p>
                                        <p className='address'>{item.address}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            )}
        </div>
    )
}
export default ScenicSpot;