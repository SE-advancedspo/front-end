import init from '../init';

export const registerNewUser = (userData) => {
    return init.post('/user', userData);
};