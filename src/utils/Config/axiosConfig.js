import axios from "axios";

const customFetch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://dummyjson.com/",
});

export default customFetch;
