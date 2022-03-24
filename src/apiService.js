import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../src/app/config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (req) => {
    console.log("start request", req);
    return req;
  },
  function (err) {
    console.log("request error", err);
  }
);

apiService.interceptors.response.use(
  (res) => {
    console.log("response", res);
    return res;
  },
  function (err) {
    console.log("response", err);
  }
);

export default apiService;
