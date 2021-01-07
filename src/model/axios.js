import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://api.imjad.cn'
});

axios.interceptors.request.use(config => {
    if (config.method === 'POST') {
        config.data = JSON.stringify(config.data);
    }
    return config;
})

axios.interceptors.response.use(response => {
    return response.data;
}, err => {
    return Promise.reject(err);
})

export default axios;