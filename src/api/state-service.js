import mavidev from "./api-instance";

export const getAllStates = () => {
    return mavidev.get("states");
}
export const addState = (state) => {
    return mavidev.post("states", state);
}
export const updateState = (id, state) => {
    return mavidev.put(`states/${id}`, state);
}
export const deleteState = (id) => {
    return mavidev.delete(`states/${id}`);
}