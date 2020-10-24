import axios from 'axios';
import config from '../config/Config';

const api = axios.create({
    baseURL: config.urlApi
});

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};


export default api;