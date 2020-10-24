import {secure} from './api/LoginApi';
import config from './config/Config';

    export const saveSession = (token) => {
        sessionStorage.setItem(config.sessionNames.token, token);
    };

    export const getToken = () => {
        return secureValidate() ? sessionStorage.getItem(config.sessionNames.token) : logOut();
    };

    export const secureValidate = async () => {
        let token = sessionStorage.getItem(config.sessionNames.token);
        if (token != null) {
            try {
                let response = await secure(token);
                console.log(response);
                if (response.statusCode === 200) {
                    return true;
                }
            } catch (e) {
                console.log(e);
                logOut();
            }
        }

        return false;
    };

    export const isLogged = (sessionStorage.getItem(config.sessionNames.token) != null);

    export const logOut = () => {
        sessionStorage.clear();

    };
