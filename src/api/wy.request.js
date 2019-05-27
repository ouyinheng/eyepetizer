import axios from 'axios';
const host= 'http://118.25.95.147:3000';
export const getLoginStatus = () => axios.get(`${host}/login/status`).then( res => res.data)