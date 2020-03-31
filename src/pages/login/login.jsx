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
class Login extends Component {

    /**
     * 自定义表单验证
     * 校验规则：
     * 1.不能为空
     * 2.不能小于4位
     * 3.不能大于16位
     * 4.只能由字母、数字或下划线组成
     *
     * @param rule
     * @param value 输入的值
     * @param callback 回调函数（必须被调用）
     */
    validatePwd = (rule, value, callback) => {
        if (!value) {
            callback("请输入密码！");
        } else if (value.length < 4) {
            callback("密码不能小于4位！");
        } else if (value.length > 16) {
            callback("密码不能大于16位！");
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback("密码只能是字母、数字或下划线组成！");
        } else {
            callback();
        }
    };

    /**
     * form表单提交方法
     *
     * @param event
     */
    handleSubmit = (event) => {
        // 阻止事件默认行为
        event.preventDefault();

        // 对所有表单字段进行校验
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('提交登录请求：', values);
            }
        });

        // 获取表单数据
        // const values = this.props.form.getFieldsValue();
        // console.log(values);
    };

    render () {
        const { getFieldDecorator } = this.props.form;
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
                            {
                                getFieldDecorator("userName", {
                                    /**
                                     * 声明试表单校验
                                     * 校验规则：
                                     * 1.不能为空
                                     * 2.不能小于4位
                                     * 3.不能大于16位
                                     * 4.只能由字母、数字或下划线组成
                                     */
                                    rules: [
                                        {required: true, whitespace: true, message: "请输入用户名！"},
                                        {min: 4, message: "用户名不能小于4位！"},
                                        {max: 16, message: "用户名不能大于16位！"},
                                        {pattern: /^[a-zA-Z0-9_]+$/, message: "用户名只能是字母、数字或下划线组成！"},
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator("password", {
                                    rules: [
                                        {
                                            // 自定义表单验证
                                            validator: this.validatePwd
                                        }
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
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

// 包装Form组件，得到一个高阶组件
const WrappedForm = Form.create()(Login);

export default WrappedForm;
