import init from "../init";

export const login = (user) => {
    return init.post("/user/auth", user);
};

