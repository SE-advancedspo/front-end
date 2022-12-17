import init from '../init.js';

export const addFriend = (friend_username) => {
    const username = localStorage.getItem('username');
    const data = {
        friend_username: friend_username,
    }
    const config = {
        username: username,
    }
    return init.post('/friend/'+username, data, {params: config})
}