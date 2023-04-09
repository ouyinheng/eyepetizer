import axios from "axios";
const host = "/wy";

// banner
export const getBanner = () => axios.get(`${host}/banner?type=1`);

// 获取每日推荐歌单
export const getRecommend = () => axios.get(`${host}/recommend/resource`);
// 获取歌单内容
export const getRecommendInfo = (id) => axios.get(`${host}/playlist/detail?id=${id}`);

// 获取每日推荐歌曲
export const getDayRecom = () => axios.get(`${host}/recommend/songs`);

// 排行榜
export const getTopListDetail = () => axios.get(`${host}/toplist/detail`);

// 歌单分类
export const getSongListClassify = () => axios.get(`${host}/playlist/hot`);
//
export const getSongListInfo = (params) =>
  axios.get(
    `${host}/top/playlist/highquality?before=${params.before}&limit=${params.limit}&cat=${params.cat}`
  );
// 推荐MV
export const getRecomMv = () => axios.get(`${host}/personalized/mv`);

// 获取精品歌单
export const getHighquality = () => axios.get(`${host}/top/playlist/highquality?limit=6`);
