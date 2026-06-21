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
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.roles = action.payload.roles;
        },
        set_logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.roles = [];
        },
    },
});


export const { set_login, set_logout } = authSlice.actions;


export default authSlice.reducer