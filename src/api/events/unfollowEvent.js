import init from "../init";

const username = localStorage.getItem('username');

export const unfollowEvent = (id_evento) => {
    const data = {
        id: id_evento,
    }
    const config = {
        username: username,
    }
    const url = "/evento/segui/"+username;
    return init.delete(url, {data: data}, {params: config});
}