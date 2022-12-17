import init from "../init";

const username = localStorage.getItem('username');

export const upVote = (id_spot) => {

    const url = "/spot/like/"+username;
    const data = {
        id: id_spot,
    }
    const config = {
        username: username,
    }

    return init.post(url, data, {params: config});
}