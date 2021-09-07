import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.WEATHER_API_KEY,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
