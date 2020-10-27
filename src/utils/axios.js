// 请求拦截
import axios from 'axios'

if (process.env.NODE_ENV == 'development') {
    // axios.defaults.baseURL = 'http://poly.luoliny.com/'
    axios.defaults.baseURL = 'https://www.easy-mock.com/mock/'
} else
if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://poly.luoliny.com/'
}

axios.interceptors.request.use(function(config) {
    console.log(config);
    return config;
}, function(error) {
    return Promise.reject(error);
});


//响应拦截器  接受到数据的时候对数据进行处理
axios.interceptors.response.use(function(response) {
    console.log('响应拦截器', response)
    return response.data;
}, function(error) {
    return Promise.reject(error);
});

export default axios