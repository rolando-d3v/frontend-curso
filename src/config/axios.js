import axios from "axios";


const API_URL_SERVER = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";



export const api = axios.create({
  baseURL: API_URL_SERVER,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // ← envía cookies HttpOnly en cada petición
});


