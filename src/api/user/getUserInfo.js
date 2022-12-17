import init from "../init";

export const getUserInfo = (username) => {
    const url = "/user/" + username
    return init.get(url);
}