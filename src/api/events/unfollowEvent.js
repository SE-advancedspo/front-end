import init from "../init";


export const unfollowEvent = (id_evento) => {
    const username = localStorage.getItem('username');
    const data = {
        id: id_evento,
    }
    const config = {
        username: username,
    }
    const url = "/evento/segui/"+username;
    return init.delete(url, {data: data}, {params: config});
}