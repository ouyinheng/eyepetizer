import axios from "axios";

// 获取用户歌单
export const getUserSingList = (uid) => axios.get(`/user/playlist?uid=${uid}`);

// 获取音乐详情
export const getMusicDetails = (id) => axios.get(`/song/detail?ids=${id}`);
// 歌词
export const getMusicLyric = (id) => axios.get(`/lyric?id=${id}`);
