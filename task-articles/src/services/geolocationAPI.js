import axios from "axios";

const geolocationAPI = axios.create({
    baseURL: "http://api.ipstack.com",
  });

export default geolocationAPI;