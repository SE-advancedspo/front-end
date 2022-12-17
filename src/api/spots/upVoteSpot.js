import init from "../init";


export const upVote = (id_spot) => {
    const username = localStorage.getItem('username');
    const url = "/spot/like/"+username;
    const data = {
        id: id_spot,
    }
    const config = {
        username: username,
    }

    return init.post(url, data, {params: config});
}