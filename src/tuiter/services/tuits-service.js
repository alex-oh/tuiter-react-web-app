import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
console.log(process.env)
console.log(API_BASE)
const TUITS_API = `${API_BASE}/tuits`;
console.log(TUITS_API);

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
};
export const findTuits = async () => {
    // send http get request to tuits_api
    const response = await axios.get(TUITS_API);
    // extract json array from response from server
    const tuits = response.data;
    return tuits;
};
export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data;
};

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
};
