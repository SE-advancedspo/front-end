import init from '../init.js';

const username = localStorage.getItem('username');

export const removeFriend = (friend_username) => {
    const data = {
        friend_username: friend_username,
    }
    const config = {
        username: username,
    }
    return init.delete('/friend/'+username, {data: data}, {params: config})
}