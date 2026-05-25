import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isAuthenticated: false,
    usuario: null,
    roles: [],
}



const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        set_login: (state, action) => {
            state.usuario = action.payload;
        },
        set_logout: (state) => {
            state.usuario = null;
            state.isAuthenticated = false;
            state.roles = [];
        },
    },
});


export const { set_login, set_logout } = authSlice.actions;


export default authSlice.reducer