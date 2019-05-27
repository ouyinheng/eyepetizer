import Vue from 'vue'
import Vuex from 'vuex'
import './serviceConfig'
// import charts from './modules/charts'
import login from './modules/login'
import home from './modules/home'
import music from './modules/music'
import circles from './modules/circles'
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    login,
    home,
    music,
    circles
  }
})
