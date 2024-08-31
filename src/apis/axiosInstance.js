import axios from "axios";

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});

export const publicAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});
