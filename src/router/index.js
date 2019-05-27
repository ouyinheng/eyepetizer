import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Home from '@/views/home/Home.vue'
import Music from '@/views/music/index.vue'
import Mine from '@/views/mine/index.vue'

import recommendation from '@/views/home/recommendation.vue';
import login from '@/views/login/index.vue';
import singlist from '@/views/home/singlist.vue';
import ranking from '@/views/home/ranking.vue';
import station from '@/views/home/station.vue';
import music from '@/views/seconds/music.vue';
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'About',
    component: About,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        weight: 1
      },
      component: Home
    }, {
      path: '/discover',
      name: 'discover',
      meta: {
        weight: 2
      },
      component: Music
    }, {
      path: '/circle',
      name: 'circle',
      meta: {
        weight: 3
      },
      component: () => import( /* webpackChunkName: "circles" */ '../views/circles/index.vue')
    }, {
      path: '/mine',
      name: 'mine',
      meta: {
        weight: 4
      },
      component: Mine
    }]
  }, {
    path: '/itd',
    name: 'itd',
    component: () => import( /* webpackChunkName: "itd" */ '../views/itd/index.vue')
  }, {
    path: '/seconds',
    name: 'seconds',
    component: () => import( /* webpackChunkName: "seconds" */ '../views/seconds/index.vue'),
    children: [{
      path: '/music',
      name: 'music',
      meta: {
        name: 'slide-left',
        weight: 10
      },
      component: music
    }]
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/dayrecomm',
    name: 'recommendation',
    meta: {
      name: 'slide-left',
      weight: 5
    },
    component: recommendation
  }, {
    path: '/userinfo',
    name: 'userinfo',
    meta: {
      name: 'slide-left',
      weight: 6
    },
    component: () => import( /* webpackChunkName: "userinfo" */ '../views/mine/userinfo.vue')
  }, {
    path: '/singlist',
    name: 'singlist',
    meta: {
      name: 'slide-left',
      weight: 7
    },
    component: singlist
  }, {
    path: '/ranking',
    name: 'ranking',
    meta: {
      name: 'slide-left',
      weight: 8
    },
    component: ranking
  }, {
    path: '/station',
    name: 'station',
    meta: {
      name: 'slide-left',
      weight: 9
    },
    component: station
  }]
})

router.beforeEach((to, from, next) => {
  const userinfo = localStorage.userinfo;
  if (to.name === 'login') {
    next()
  } else {
    if (userinfo) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }
})
export default router;