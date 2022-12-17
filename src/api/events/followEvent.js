import init from "../init";

const username = localStorage.getItem('username');

export const followEvent = (id_evento) => {
    const data = {
        id: id_evento,
    }
    const config = {
        username: username,
    }
    const url = "/evento/segui/"+username;
    return init.post(url, data, {params: config});
}