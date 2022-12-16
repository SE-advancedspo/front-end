import init from "../init";

const url = "/user/" + localStorage.getItem('username')

export const getUserInfo = () => {
    return init.get(url);
}