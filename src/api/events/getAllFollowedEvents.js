import init from "../init";

export const getAllFollowedEvents = () => {
    const username = localStorage.getItem('username');
    const config = {
        username: username,
    }
    return init.get("/evento/segui/"+username, null, config);
}