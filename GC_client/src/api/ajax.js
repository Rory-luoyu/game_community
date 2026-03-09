import axios from 'axios'
import { loginFilter } from "@/filter";
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 从sessionStorage获取登录信息
    const loginUser = sessionStorage.getItem('loginUser');
    if (loginUser) {
      // 可以在这里添加token等认证信息
      // config.headers.Authorization = `Bearer ${JSON.parse(loginUser).token}`;
    }
    return config;
  },
  error => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.flag) {
      // 显示错误信息
      Message.warning(res.msg || '操作失败');
    }
    return res;
  },
  error => {
    console.error('响应错误:', error);
    // 统一错误处理
    let message = '网络错误，请稍后重试';
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message = '未授权，请重新登录';
          // 可以在这里跳转到登录页
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = '请求地址不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `错误码: ${error.response.status}`;
      }
    }
    Message.error(message);
    return Promise.reject(error);
  }
);

/**
 * 1 封装了发送ajax请求的函数
 * 2 使用axios来封装ajax请求
 * 3 使用按需导出
 */

/**
 *
 * @param url 请求的地址
 * @param data 请求的数据
 * @param type 请求的类型
 * @return Promise 返回对象
 */
export function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        /*后端请求请求拦截验证是否登录*/
        if (!loginFilter(url)) {
            return null;
        }
        //url = "api/" + url;
        let promise;
        if (type === 'GET') {
            //get请求，参数是key=value的字符串
            //data是一个对象，遍历对象
            let params = {};
            Object.keys(data).forEach(key => {
                params[key] = data[key];
            });
            promise = service.get(url, { params });

        } else if (type === 'POST') {
            promise = service.post(url, data);
        } else if (type === 'PUT') {
            promise = service.put(url, data);
        } else if (type === 'PATCH') {
            promise = service.patch(url, data);
        } else if (type === 'DELETE') {
            promise = service.delete(url, { data });
        }

        //返回结果的处理
        promise.then(function (response) {
            resolve(response);
        }).catch(function (err) {
            reject(err)
        })
    });
}

