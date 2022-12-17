import init from "../init";

export const getAllLikedSpots = () => {
    const username = localStorage.getItem('username');
    const url = "/spot/like/"+username;
    const config = {
        username: username,
    }
    return init.get(url, null, {params: config});
}