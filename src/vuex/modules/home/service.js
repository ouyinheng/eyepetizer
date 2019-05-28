import axios from 'axios'
const host= 'http://118.25.95.147:3000';

// banner
export const getBanner = () => axios.get(`${host}/banner?type=1`)

// 获取每日推荐歌单
export const getRecommend = () => axios.get(`${host}/recommend/resource`)
// 获取歌单内容
export const getRecommendInfo = (id) => axios.get(`${host}/playlist/detail?id=${id}`)

// 获取每日推荐歌曲
export const getDayRecom = () => axios.get(`${host}/recommend/songs`)