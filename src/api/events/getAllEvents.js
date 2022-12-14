import init from "../init";

export const getAllEvents = () => {
    return init.get("/evento");
}