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
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'preload.png',
  loading: 'preload.png',
  attempt: 1
})
Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')