import { api } from "../../../config/axios";


export const loginServices = async (credentials) =>
     api.post('/auth/login',credentials).then( res => res.data ).catch( error => error)  
