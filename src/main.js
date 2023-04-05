import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

import '@/components/toast/index.scss';
import Toast from '@/components/toast/index.js';
Vue.use(Toast);

import VueLazyload from 'vue-lazyload'
import './style/index.scss';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'preload.png',
  loading: 'preload.png',
  attempt: 1
})

// 自定义指令
import './directive'
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')