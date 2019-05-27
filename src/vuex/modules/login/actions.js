import * as Svc from './service'

export const login = ({ commit }, params) => {
  return Svc.login(params).then(resp => {
    localStorage.userinfo = JSON.stringify(resp.profile)
    commit('setUserInfo', resp.profile)
    return resp.profile
  })
}


export const logout = () => {
  return Svc.logout().then(() => {
  })
}

export const getLoginStatus = ({commit}) => Svc.getLoginStatus().then(res=> {
  commit('setLoginStatus', true)
  commit('setUserInfo', JSON.parse(localStorage.userinfo))
  return res;
})