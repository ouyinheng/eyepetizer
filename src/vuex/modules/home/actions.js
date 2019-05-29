import * as Svc from './service'

export const getBanner = ({ commit }) => {
  return Svc.getBanner().then(resp => {
    return resp;
  })
}
export const getRecommend = ({commit}) => {
  return Svc.getRecommend().then( res => {
    commit('setRecommList', res.recommend)
    return res.recommend;
  })
}
export const getRecommendInfo = ({commit}, id) => {
  return Svc.getRecommendInfo(id).then( res => {
    return res.playlist;
  })
}

export const getDayRecom = ({commit}) => {
  return Svc.getDayRecom().then( res => {
      return res.recommend;
  })
}
export const getTopListDetail = ({commit}) => {
  return Svc.getTopListDetail().then( res => {
      return res;
  })
}
