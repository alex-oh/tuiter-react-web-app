import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

// export const getUsers = () => {
//     const promise = axios.get(USERS_API);
//     console.log(promise);
//     // make something happen when promise is fulfilled
//     return promise.then((response) => {
//         console.log(response.data);
//         return response.data;
//     })
// };
export const createUser = async (username, user) => {
    const response = await axios.post(`${USERS_API}/create`, user);
    return response.data;

}

export const getUsers = async () => {
    const response = await axios.get(USERS_API); // more efficient method, ES6 syntax
    return response.data;
};
export const getUserById = () => {};
