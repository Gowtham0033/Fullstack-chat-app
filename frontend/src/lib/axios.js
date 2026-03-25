import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const baseURL = 
  apiUrl && apiUrl !== "undefined" && apiUrl.trim()
    ? apiUrl.trim() + "/api"
    : "/api";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});