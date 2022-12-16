import init from "../init";

const login = (user) => {
    return init.post("/login", user);
};

