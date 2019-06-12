import axios from 'axios'
const host= 'http://118.25.95.147:3000';

// 获取用户歌单
export const getUserSingList = (uid) => axios.get(`${host}/user/playlist?uid=${uid}`)

// 获取音乐详情
export const getMusicDetails = (id) => axios.get(`${host}/song/detail?ids=${id}`)
// 歌词
export const getMusicLyric = (id) => axios.get(`${host}/lyric?id=${id}`)
