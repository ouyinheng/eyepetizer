import axios from "axios";
const host = "/wy";
/*type 取值:
-1:全部
1:男歌手
2:女歌手
3:乐队
area 取值:

-1:全部
7华语
96欧美
8:日本
16韩国
0:其他
*/
// 获取歌手分类列表
export const getArtistListApi = ({ type, area, limit }) =>
  axios.get(`${host}/artist/list?type=${type}&area=${area}&limit=${limit}`);

// FM
export const getPersonalFmApi = () => axios.get(`${host}/personal_fm?time=${new Date().getTime()}`);
