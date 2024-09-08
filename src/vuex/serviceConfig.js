import Axios from "axios";
// import router from '@/router'
import Message from "muse-ui-message";
import "muse-ui-message/dist/muse-ui-message.css";
// Axios.defaults.baseURL = process.env.API_ENV
Axios.defaults.timeout = 20000;
Axios.defaults.withCredentials = true;
switch (process.env.NODE_ENV) {
  case "production":
    Axios.defaults.baseURL = import.meta.env.VITE_MUSIC_API;
    break;
  case "development":
    Axios.defaults.baseURL = "/wy";
    break;
  default:
    Axios.defaults.baseURL = import.meta.env.VITE_MUSIC_API;
    break;
}
Axios.interceptors.response.use(
  (resp) => {
    return Promise.resolve(resp.data);
  },
  (error) => {
    // const status = error.response.status
    Message.alert(error.response.data.msg, "TIPS");
    return Promise.reject(error);
  }
);
