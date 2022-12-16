import init from "../init";

export const getAllUsers = () => {
    return init.get("/user");
}