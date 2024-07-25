import axios from "axios";
const API_BASE_URL = "https://quiz-krishang.vercel.app";
const token = localStorage.getItem("authtoken");
export const DefaultApiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const AuthApiService = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    "Content-Type": "application/json",
    "x-platform": "web",
  },
});
