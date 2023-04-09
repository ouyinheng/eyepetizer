import * as Svc from "./service";
import { getArtistListApi, getPersonalFmApi } from "../api/index";
export const getBanner = ({ commit }) => {
  return Svc.getBanner().then((resp) => {
    return resp;
  });
};
export const getRecommend = ({ commit }) => {
  return Svc.getRecommend().then((res) => {
    commit("setRecommList", res.recommend);
    return res.recommend;
  });
};
export const getRecommendInfo = ({ commit }, id) => {
  return Svc.getRecommendInfo(id).then((res) => {
    return res.playlist;
  });
};

export const getDayRecom = ({ commit }) => {
  return Svc.getDayRecom().then((res) => {
    return res.recommend;
  });
};
export const getTopListDetail = ({ commit }) => {
  return Svc.getTopListDetail().then((res) => {
    return res;
  });
};
export const getSongListClassify = ({ commit }) => {
  return Svc.getSongListClassify().then((res) => {
    return res;
  });
};
export const getSongListInfo = ({ commit }, params) => {
  return Svc.getSongListInfo(params).then((res) => {
    return res;
  });
};
// 推荐MV
export const getRecomMv = ({ commit }) => {
  return Svc.getRecomMv().then((res) => {
    return res;
  });
};

// 获取精品歌单
export const getHighquality = ({ commit, state }) => {
  if (state?.highquality.length) return;
  return Svc.getHighquality().then((res) => {
    if (res.code === 200) {
      commit("setHighquality", res.playlists);
    }
    return res;
  });
};

// 获取歌手分类列表
export const getArtistList = ({ commit, state }, params) => {
  return getArtistListApi(params).then((res) => {
    if (res.code === 200) {
      console.log("resparams", res);
      // commit("setHighquality", res.playlists);
    }
    return res;
  });
};
