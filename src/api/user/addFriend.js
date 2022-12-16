import init from '../init.js';

const username = localStorage.getItem('username');

export const addFriend = (friend_username) => {
    const data = {
        username: username,
        friend_username: friend_username,
    }

    return init.post('/friend/', data)
}