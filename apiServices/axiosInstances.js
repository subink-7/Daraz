import axios from "npm i axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

