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
export const getDayRecom = ({commit}) => {
  return Svc.getDayRecom().then( res => {
      return res.recommend;
  })
}