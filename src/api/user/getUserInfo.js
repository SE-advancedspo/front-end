import init from "../init";

const url = "/user/" + localStorage.getItem('username')
console.log(url)

export const getUserInfo = () => {
    return init().get("/user/utente1");
}