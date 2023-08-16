import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_API = process.env.REACT_APP_API_BASE.concat("/users");

// create instance of axios that supports cookies
const api = axios.create({
    withCredentials: true,
    baseURL: USERS_API,
});

export const registerThunk = createAsyncThunk(
    "user/register",
    async (user) => await register(user)
);

export const loginThunk = createAsyncThunk(
    "user/login",
    async (user) => await login(user)
);

export const profileThunk = createAsyncThunk(
    "user/profile",
    async(user) => await profile(user)
)

export const logoutThunk = createAsyncThunk(
    "user/logout",
    async (user) => await logout(user)
)

export const register = async (user) => {
    // call post request to users-controller
    const response = await api.post(`${USERS_API}/register`, user);
    return response.data;
};
export const login = async (user) => {
    // call post request to users-controller
    const response = await api.post(`${USERS_API}/login`, user);
    return response.data;
};
export const profile = async (user) => {
    // call post request to users-controller
    const response = await api.post(`${USERS_API}/profile`);
    return response.data;
};
export const logout = async (user) => {
    // call post request to users-controller
    const response = await api.post(`${USERS_API}/logout`);
    return response.data;
};

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
    const response = await axios.post(USERS_API, user);
    return response.data; // should get back an array of users
};

export const getUsers = async () => {
    const response = await axios.get(USERS_API); // more efficient method, ES6 syntax
    return response.data;
};
export const getUserById = () => {};

export const removeUser = async (uid) => {
    const response = await axios.delete(`${USERS_API}/${uid}`);
    return response.data;
};

export const updateUser = async (newUser) => {
    const response = await axios.put(`${USERS_API}/2/${newUser._id}`, newUser);
    console.log(response);
    return response.data;
};
