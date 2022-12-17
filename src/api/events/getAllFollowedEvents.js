import init from "../init";

export const getAllFollowedEvents = (username) => {
    const config = {
        username: username,
    }
    return init.get("/evento/segui/"+username, null, config);
}