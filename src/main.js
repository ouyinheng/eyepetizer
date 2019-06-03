import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import VueLazyload from 'vue-lazyload'
import './style/index.scss';
// 自定义指令
import './directive'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'preload.png',
  loading: 'preload.png',
  attempt: 1
})
Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.axios = axios
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {
  name: 'v-touch'
});
VueTouch.config.swipe = {
  threshold: 100 
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')