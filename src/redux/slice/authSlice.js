import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isAuthenticated: false,
    user: null,
    roles: [],
}



const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        set_login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.roles = action.payload.roles;
        },
        set_logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.roles = [];
        },
    },
});


export const { set_login, set_logout } = authSlice.actions;


export default authSlice.reducer