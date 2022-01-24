import axios from "axios";

export const newsAPI = axios.create({
  baseURL: "https://newsapi.org",
});

export const apiKey = "85b97cfedcc74ca8b638a08de2276099";

export default newsAPI;
