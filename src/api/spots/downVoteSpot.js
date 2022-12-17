import init from "../init";


export const downVote = (id_spot) => {
    const username = localStorage.getItem('username');
    const url = "/spot/like/"+username;
    const data = {
        id: id_spot,
    }
    const config = {
        username: username,
    }

    return init.delete(url, {data: data}, {params: config});
}