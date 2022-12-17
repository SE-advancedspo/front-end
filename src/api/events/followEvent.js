import init from "../init";


export const followEvent = (id_evento) => {
    const username = localStorage.getItem('username');
    const data = {
        id: id_evento,
    }
    const config = {
        username: username,
    }
    const url = "/evento/segui/"+username;
    return init.post(url, data, {params: config});
}