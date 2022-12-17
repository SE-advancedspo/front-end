import init from '../init.js';

export const getAllFriends = () => {
    const username = localStorage.getItem('username');
    return init.get('/friend/'+username)
}