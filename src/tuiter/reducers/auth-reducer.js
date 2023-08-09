import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../services/auth-thunks";

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = payload;
        },
        [profileThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [profileThunk.rejected]: (state, {payload}) => {
            state.currentUser = null;
        },
        [profileThunk.pending]: (state, {payload}) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, {payload}) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state,{payload} )=> {
            state.currentUser = payload;
        }
    },
});
export default authSlice.reducer;
