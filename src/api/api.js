// 网络请求封装
import axios from '../utils/axios'
// get
export function getInfo(params) {
    return new Promise((resolve, reject) => {
        axios.post('api/rest/list', params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// mock数据
export function getMock() {
    return new Promise((resolve, reject) => {
        axios.get('5f69baa308d0e90f8b2abe17/aaa/getlist')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
// post

// delete

// put