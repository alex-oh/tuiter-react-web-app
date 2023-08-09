import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";
export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        // send credentials to auth controller using login service
        const user = await authService.login(credentials);
        return user;
    }
);
export const profileThunk = createAsyncThunk("auth/profile", async () => {
    const response = authService.profile();
    return response.data;
});
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
    return await authService.logout();
});
export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);
export const registerThunk = createAsyncThunk(
    "user/register",
    async (credentials) => {
        // send credentials to reducer
        // response from auth-service register() should be a new user
        const newUser = await authService.register(credentials);
        return newUser;
    }
);