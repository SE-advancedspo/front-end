import init from "../init";

export const getAllSpots = () => {
    return init.get("/spot");
}