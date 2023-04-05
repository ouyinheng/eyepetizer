import axios from 'axios'
const host= '/wy';

// 获取用户歌单
export const getUserDynamic = (params) => axios.get(`${host}/event?pagesize=${params.pagesize}&lasttime=${params.lasttime}`)
// 获取视频url
export const getVideoUrl = (id) => axios.get(`${host}/video/url?id=${id}`)
// http://118.25.95.147:3000/video/url?id=BA7250C25823ED2F985507F46D2BD663