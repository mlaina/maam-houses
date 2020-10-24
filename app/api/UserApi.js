import api from './Api';


export const getUsers = async (token) => {
    console.log('react-API: Getting Users '+token);
    return api.get('users', {headers: {'Authorization':'Bearer '+token}}).then(res => res.data);
};

export const getUser = async (userId, token) => {
    console.log('react-API: Getting User '+userId+' '+token);
    return api.get('user/'+userId, {headers: {'Authorization':'Bearer '+token}}).then(res => res.data);
};


export const updateUser = async (user, token) => {
    console.log('react-API: Updating User');
    return api.put('user/'+user.id,  user, {headers: {'authorization':'Bearer '+token}}).then(res => res.data[0]);
};

export const deleteUser = async (userId, token) => {
    console.log('react-API: Deleting User '+userId+' '+token);
    return api.delete('user/'+userId,{headers: {'Authorization':'Bearer '+token}}).then(res => res.data[0]);
};

export const insertUser = async (user, token) => {
    console.log('react-API: Inserting User');
    return api.post('users/', user, {headers: {'Authorization':'Bearer '+token}}).then(res => res.data[0]);
};