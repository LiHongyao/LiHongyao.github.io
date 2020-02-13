import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context';
import {api} from '../../util/util';
import './recommend.css';

const Recommend = (props) => {
    const { dispatch } = useContext(AppContext);
    const [data, setData] = useState(null);
    // 标题更新
    useEffect(() => {
        dispatch({type:'UPDATE_TITLE', title: '推荐'});
    }, [dispatch]);
    // => ajax
    useEffect(() => {
        fetch(`${api}/info?type=recommend`).then(res => res.json()).then(data => { 
            setData(data.data);
        });
    }, []);
    // => Events
    const handleItemClick  = (item) => {
        // 页面跳转
        // 传参
        // - params => /path/:params
        // - query  => {path, query}
        // - state  => {path, state}
        props.history.push({
            pathname: '/details',
            state: item
        });
    }

    return <div className='page recommend'>
        {
            data && data.map((item, index) => {
                return (<img onClick={() => {handleItemClick(item)}} src={`${api}/images/${item.logoImage}`} key={index} alt='loadding err'/>);
            })
        }
    </div>
}
export default Recommend;