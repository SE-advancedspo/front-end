import init from "../init";

export const createSpot = (spot) => {
    return init.post("/spot", spot);
}