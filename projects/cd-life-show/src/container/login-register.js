import React, {Component} from 'react';
import {
  Icon
} from 'antd';
import '../styles/login-register.css';
import Tools from '../scripts/common'

class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this.handleBtn = this.handleBtn.bind(this);
    this.handleLoginRegisterBtn = this.handleLoginRegisterBtn.bind(this);
  }

  handleBtn() {
    // 清空文本输入框
    this.username.value = this.password.value = '';
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin
    }));
  }

  handleLoginRegisterBtn() {
    // 异常处理
    if(!this.username.value || !this.password.value) {
      alert('请完善信息!');
      return;
    }
    let tools = new Tools();
    let user = {
      username: this.username.value,
      password: this.password.value
    };
    if(this.state.isLogin) {
      tools.login(user, () => {
        // 跳转至首页
        this.props.history.replace('/home');
      })
    }else {
      tools.register(user, () => {
        // 跳转至首页
        this.props.history.replace('/home');
      });
    }
  }

  render () {
    return (
      <div id='app'>
        {/* logo区域 */}
        <img className='logo' src={require('../asserts/logo.png')} alt='' />
        {/* 表单 */}
        <form name='myForm'>
          <section className='form-item'>
            <Icon className='icon' type="user" />
            <input type='text' ref={(input) => {this.username = input}} placeholder='请输入账号...'/>
          </section>
          <section className='form-item'>
            <Icon className='icon' type="lock" />
            <input type='password' ref={(input) => {this.password = input}} placeholder='请输入密码...'/>
          </section>
          <section className='info-box'>
            <span className={this.state.isLogin ? 'hidden' : ''} onClick={this.handleBtn}>返回登陆</span>
            <span className={this.state.isLogin ? '' : 'hidden'} onClick={this.handleBtn}>没有账号？点击注册</span>
            <div className='btn' onClick={this.handleLoginRegisterBtn}>{this.state.isLogin ? '登陆' : '注册'}</div>
          </section>
        </form>
      </div>)
  }
}

export default LoginRegister;