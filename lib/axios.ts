import axios from "axios";
import TokenService from "service/token.service";
import {
  SPOTIFY_BASE_API_URL,
  SERVERLESS_BASE_API_URL,
} from "config/constants";

axios.defaults.baseURL = SPOTIFY_BASE_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();

    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log(err);
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const rs = await axios.get(`${SERVERLESS_BASE_API_URL}/api/token`);
        console.log("HELLO", rs);
        const { access_token } = rs.data;
        TokenService.setLocalAccessToken(access_token);
        return axios(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(err);
  }
);
