import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style/index.scss';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'logo.png',
  loading: 'logo.png',
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
