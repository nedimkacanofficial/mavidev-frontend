import mavidev from "./api-instance";

export const getAllCities = () => {
    return mavidev.get("cities");
}
export const addCity = (city) => {
    return mavidev.post("cities", city);
}
export const updateCity = (id, city) => {
    return mavidev.put(`cities/${id}`, city);
}
export const deleteCity = (id) => {
    return mavidev.delete(`cities/${id}`);
}