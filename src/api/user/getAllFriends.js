import init from '../init.js';

const username = localStorage.getItem('username');

export const getAllFriends = () => {
    return init.get('/friend/'+username)
}