import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL + "/api"
  : "/api";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});