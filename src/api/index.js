/**
 * 包含应用中所有接口请求函数的模块
 * 每个函数返回值都是promise对象
 */
import ajax from './ajax';

// 登录接口请求函数
export const reqLogin = (userName, password) => ajax('/login', {userName, password}, 'POST');

// 添加用户请求函数
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST');
