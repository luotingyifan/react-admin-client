/**
 * 发送ajax异步请求的函数模块
 * 封装axios库
 * 函数的返回值是promise对象
 */
import axios from 'axios';

/**
 * 定义一个ajax请求函数
 *
 * @param url 接口请求地址
 * @param data 接口请求参数，默认为空对象
 * @param type 接口请求类型，默认为GET类型
 */
export default function ajax(url, data={}, type='GET') {
    if (type === 'GET') { // 发送GET请求
        return axios.get(url, {
            params: data // 指定请求参数
        });
    } else { // 发送POST请求
        return axios.post(url, data);
    }
}
