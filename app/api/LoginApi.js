import api from './Api';


export const login = async (user) => {
    console.log('react-API: SigIn');
    return api.post('login', user).then(res => res.data);
};

export const register = async (user) => {
    console.log('react-API: Register');
    return api.post('register', user).then(res => res.data);
};


export const secure = async (token) => {
    console.log('react-API: Secure');
    return api.post('secure', {headers: {'authorization':token}}).then(res => res.data);
};