import React, { useContext, useRef, useEffect } from 'react';
import AppContext from '../../context';
import "font-awesome/css/font-awesome.min.css";
// 引入组件
import Icon from "react-fontawesome";
import './login.css';
import {api} from '../../util/util';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const { dispatch } = useContext(AppContext);
    const history = useHistory();
    const usrInput = useRef(null);
    const pswInput = useRef(null);
    useEffect(() => {
        dispatch({ type: 'UPDATE_APPHEADER_VISIBLE', flag: false });
        dispatch({ type: 'UPDATE_APPFOOTER_VISIBLE', flag: false });
        return () => {
            dispatch({ type: 'UPDATE_APPHEADER_VISIBLE', flag: true });
            dispatch({ type: 'UPDATE_APPFOOTER_VISIBLE', flag: true });
        }
    }, [dispatch]);
    // => Events
    const close = () => {
        history.push('/');
    }
    const login = () => {
        let username = usrInput.current.value;
        let password = pswInput.current.value;
        // 判断
        if(!username || !password) {
            alert('请输入账号或密码!')
        }else {
            // 登陆
            fetch(`${api}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            }).then(response => response.json()).then(data => {
                // 保存token
                localStorage.setItem('token', data.token);
                history.push('/');
            })
        }
        
    }
    return (
        <div className='page login'>
           
            <Icon className='close' onClick={close} name='times-circle'/>

            <img className='logo' src={`${api}/images/logo.png`} alt='loading err'/>

            <section className='input-item'>
                <input ref={usrInput} type='text' placeholder='账号'/>
            </section>
            <section className='input-item'>
               <input ref={pswInput} type='password' placeholder='密码'/>
            </section>
            <section className='input-item button' onClick={login}>
                登陆
            </section>
        </div>
    )
}
export default Login;