import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../context';
import { api } from '../../util/util.js';
import "font-awesome/css/font-awesome.min.css";
import Icon from "react-fontawesome";
import { useHistory } from 'react-router-dom';
import './mine.css';

const Mine = () => {
	const { dispatch } = useContext(AppContext);
	const history = useHistory();
	const fnlist = [
		{ icon: "cog", text: "设置" },
		{ icon: "bell", text: "通知" },
		{ icon: "tags", text: "收藏" },
		{ icon: "telegram", text: "发现" }
	]
	// 判断是否需要登陆
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			history.push('/login')
		} else {
			// 验证是否过期
			fetch(`${api}/auth`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					'Authorization': token
				}
			}).then(response => response.json()).then(data => {
				console.log(data);
				if (data.success) {

				} else {
					alert('token过期，请重新登陆！');
					history.push('/login')
				}
			})
		}
	}, [history]);

	useEffect(() => {
		dispatch({ type: 'UPDATE_TITLE', title: '我的' });
	}, [dispatch]);
	return (
		<div className='page mine'>
			{/*横幅*/}
			<div className='banner' style={{ background: `url(${api}/images/bg.jpeg) no-repeat center center / cover` }}>
				<div className='avatar' style={{ background: `url(${api}/images/head-portrait.JPG) no-repeat top center / cover` }}></div>,
				<p className='autograph'>曾经沧海难为水, 除却巫山不是云.</p>
			</div>
			{/*功能列表*/}
			<ul className='list'>
				{
					fnlist.map((item, index) => {
						return (
							<li key={index}>
								<section className='infos'>
									<Icon name={item.icon} />
									<span>{item.text}</span>
								</section>
								<Icon name='angle-right' />
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}
export default Mine;