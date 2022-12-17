import init from "../init";

const username = localStorage.getItem('username');

export const getAllFollowedEvents = () => {
    const config = {
        username: username,
    }
    return init.get("/evento/segui/"+username, null, config );
}