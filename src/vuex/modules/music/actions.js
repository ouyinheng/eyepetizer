import * as Svc from "./service";

export const getUserSingList = ({ commit }, uid) => {
  return Svc.getUserSingList(uid).then((resp) => {
    const setUpuserSingList = resp?.playlist?.filter((item) => {
      return !item.subscribed;
    });
    const collectUserSingList = resp.playlist.filter((item) => {
      return item.subscribed;
    });
    commit("setSetUpuserSingList", setUpuserSingList);
    commit("setCollectUserSingList", collectUserSingList);
    return resp;
  });
};
export const getMusicDetails = ({ commit }, id) => {
  return Svc.getMusicDetails(id).then((resp) => {
    return resp;
  });
};
export const getMusicLyric = ({ commit }, id) => {
  return Svc.getMusicLyric(id).then((resp) => {
    return resp;
  });
};
