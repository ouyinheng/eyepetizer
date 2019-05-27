import * as actions from './actions'
import * as mutations from './mutation'
import * as getters from './getters'

export default {
  state: {
    userinfo: {
      followeds: 0,
      eventCount: 0,
      follows: 0,
      nickname: '',
      signature:''
    },
    isLogin: false
  },
  actions,
  mutations,
  getters
}
