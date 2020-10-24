---
to: ../app/api/<%= mayusname %>Api.js
---
import api from './Api';


export const get<%= mayuspluralname %> = async (token) => {
    console.log('react-API: Getting <%= mayuspluralname %>');
    return api.get('<%= pluralname %>', {headers: {'Authorization':'Bearer '+token}}).then(res => res.data);
};

export const get<%= mayusname %> = async (<%= name %>Id, token) => {
    console.log('react-API: Getting <%= mayusname %>');
    return api.get('<%= pluralname %>', {headers: {'Authorization':'Bearer '+token}}).then(res => res.data);
};

export const update<%= mayusname %> = async (<%= name %>, token) => {
    console.log('react-API: Updating <%= mayusname %>');
    return api.get('<%= name %>/'+<%= name %>.id, [<%= name %>, {headers: {'authorization':'Bearer '+token}}]).then(res => res.data[0]);
};

export const delete<%= mayusname %> = async (<%= name %>Id, token) => {
    console.log('react-API: Deleting <%= mayusname %>');
    return api.delete('<%= name %>/'+<%= name %>Id).then(res => res.data[0]);
};

export const insert<%= mayusname %> = async (<%= name %>, token) => {
    console.log('react-API: Inserting <%= mayusname %>');
    return api.post('<%= pluralname %>/', user).then(res => res.data[0]);
};