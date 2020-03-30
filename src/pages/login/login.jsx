import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.svg';
import { Form, Icon, Input, Button } from 'antd';

const Item = Form.Item;

/**
 * 登录的路由组件
 *
 * Created by Luo Ting on 2020-03-30
 */
export default class Login extends Component {

    /**
     * form表单提交方法
     */
    handleSubmit = () => {

    };

    render () {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={ logo } alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Item>
                        <Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Item>
                        <Form.Item>

                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
