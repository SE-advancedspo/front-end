import init from '../init.js';

export const removeFriend = (friend_username) => {
    const username = localStorage.getItem('username');
    const data = {
        friend_username: friend_username,
    }
    const config = {
        username: username,
    }
    return init.delete('/friend/'+username, {data: data}, {params: config})
}