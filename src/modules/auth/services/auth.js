import { api } from "../../../config/axios";


export const loginServices = async (credentials) =>
     api.post('/auth/login',credentials).then( res => res.data ).catch( error => error)  



export const authVerifyServices = async () =>
     api.get('/auth/verify').then( res => res.data ).catch( error => error)  



export const authLogoutServices = async () =>
     api.post('/auth/logout').then( res => res.data ).catch( error => error)  


