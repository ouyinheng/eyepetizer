import axios from "axios";

// 登录
export const login = (params) =>
  axios.get(`/login/cellphone?phone=${params.phone}&password=${params.password}`);
// 获取登录状态
export const getLoginStatus = () => axios.get(`/login/status`);
// 退出登录
export const logout = () => axios.get(`/logout`);
// 刷新登录状态
export const refresh = () => axios.get(`/login/refresh`);
