import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.svg';

/**
 * 登录的路由组件
 *
 * Created by Luo Ting on 2020-03-30
 */
export default class Login extends Component {
    render () {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={ logo } alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content"></section>
            </div>
        );
    }
}
