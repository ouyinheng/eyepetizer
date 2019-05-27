import {host} from '@/config/config';
import axios from 'axios';
// 每日音乐推荐列表
export const getRecomm = () => axios.get(`${host}/music/recommend/list`).then(res => res.data);
// 获取榜单列表 获取每日音乐推荐列表。---music/order/list
export const getRankList = () => axios.get(`${host}/music/order/list`).then(res => res.data);

// 接口说明： 获取指定榜单类型的歌曲列表。需要传入榜单类型type
// 接口地址： [HOST]/music/order/song/list 【例如： [HOST]/music/order/song/list?type=2&page=1】
// 参数说明： type：榜单列表中的榜单类型；page：页数(从1开始)
export const getRankListInfo = (params) => axios.get(`${host}/music/order/song/list?type=${params.type}&page=${params.page}`).then(res => res.data);

// 接口说明： 搜索歌曲
// 接口地址： [HOST]/music/song/search 【例如： [HOST]/music/song/search?keyWord=稻香】
// 参数说明： keyWord：被搜索的歌曲关键字
export const searchMusic = (keyWord) => axios.get(`${host}/music/song/search?keyWord=${keyWord}`).then(res => res.data);

// 接口说明： 根据歌曲id获取歌曲详情
// 接口地址： [HOST]/music/song/detail 【例如： [HOST]/music/song/detail?songId=114921778】
// 参数说明： songId：被搜索的歌曲id
export const musicInfo = (songId) => axios.get(`${host}/music/song/detail?songId=${songId}`).then(res => res.data);

// 接口说明： 搜索歌手信息
// 接口地址： [HOST]/music/singer/search 【例如： [HOST]/music/singer/search?keyWord=周杰伦】
// 参数说明： keyWord：被搜索的歌手关键字
export const searchSinger = (keyWord) => axios.get(`${host}/music/singer/search?keyWord=${keyWord}`).then(res => res.data);

// 接口说明： 通过歌手id获取歌手详情
// 接口地址： [HOST]/music/singer/detail 【例如： [HOST]/music/singer/detail?singerId=340442495】
// 参数说明： singerId：被搜索的歌手id
export const singerInfo = (singerId) => axios.get(`${host}/music/singer/detail?singerId=${singerId}`).then(res => res.data);

// 接口说明： 通过歌手id获取歌手所有的单曲列表
// 接口地址： [HOST]/music/singer/song/list 【例如： [HOST]/music/singer/song/list?singerId=340442495&page=1】
// 参数说明： singerId：被查询的歌手id ；page：页数(从1开始)
export const singerMusicList = (singerId) => axios.get(`${host}/music/singer/song/list?singerId=${singerId}`).then(res => res.data);
