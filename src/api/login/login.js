import init from "../init";

const login = (username, password) => {
    return init.post("/login", { email, password });
};

