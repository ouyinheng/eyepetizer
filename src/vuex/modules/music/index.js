import * as actions from "./actions";
import * as mutations from "./mutation";
import * as getters from "./getters";

export default {
  state: {
    setUpuserSingList: [],
    collectUserSingList: [],
    playList: [],
    nowPlay: -1,
    play: false,
    isFm: false,
    fmList: []
  },
  actions,
  mutations,
  getters
};
