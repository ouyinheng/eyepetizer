import axios from 'axios'
const host= '/wy';

// 登录
export const login = (params) => axios.get(`${host}/login/cellphone?phone=${params.phone}&password=${params.password}`)
// 获取登录状态
export const getLoginStatus = () => axios.get(`${host}/login/status`)
// 退出登录
export const logout = () => axios.get(`${host}/logout`);
// 刷新登录状态
export const refresh = () => axios.get(`${host}/login/refresh`);
