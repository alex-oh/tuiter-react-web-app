// auth-thunks is called by the main react pages.
// auth-thunks -> auth-service
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";
export const loginThunk = createAsyncThunk(
    "user/login",
    async (credentials) => {
        const loggedInUser = await authService.login(credentials);
        return loggedInUser;
    }
);
export const profileThunk = createAsyncThunk("auth/profile", async () => {
    const user = await authService.profile();
    return user;
});
export const logoutThunk = createAsyncThunk("auth/logout", async () => {
    const response = await authService.logout();
    return response;
});
export const updateUserThunk = createAsyncThunk(
    "user/updateUser",
    async (user) => {
        await authService.updateUser(user);
        return user;
    }
);
export const registerThunk = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        const response = authService.register(credentials);
        console.log(response);
        return response;
    }
);
