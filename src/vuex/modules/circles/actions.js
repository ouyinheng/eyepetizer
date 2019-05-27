import * as Svc from './service'

export const getUserDynamic = ({commit, getters},{pagesize,refresh}) => {
  return Svc.getUserDynamic({
    pagesize,
    lasttime: getters.getLastTime
  }).then(resp => {
    let dynamic = [];
    if(refresh) {
      dynamic = resp.event;
    } else {
      dynamic = getters.getDynamic;
      dynamic.push(...resp.event)
    }
    commit("setDynamic", dynamic)
    commit("setLastTime", resp.lasttime)
    return resp;
  })
}
export const getVideoUrl = ({commit},id) => {
  return Svc.getVideoUrl(id).then(resp => {
    return resp;
  })
}
