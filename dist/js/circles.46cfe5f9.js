(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["circles"],{"231b":function(t,s,e){"use strict";var a=e("c419"),i=e.n(a);i.a},c419:function(t,s,e){},d516:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"circles"},[e("mu-paper",{staticClass:"demo-loadmore-wrap",attrs:{"z-depth":1}},[e("mu-appbar",{staticStyle:{color:"black"},attrs:{color:"white"}},[e("div",{staticClass:"header-top"},[e("h3",{staticClass:"font-lg"},[t._v("优圈")]),e("div",{staticClass:"font-lg"},[e("span",{staticClass:"iconfont icon-sousuo"}),e("span",{staticClass:"iconfont icon-diantai1 ml-4 mr-4"}),e("span",{staticClass:"iconfont icon-tongzhi"})])])]),e("mu-container",{ref:"container",staticClass:"demo-loadmore-content"},[e("mu-load-more",{attrs:{refreshing:t.refreshing,loading:t.loading},on:{refresh:t.refresh,load:t.load}},[e("mu-list",t._l(t.getDynamic,function(s,a){return e("div",{key:a,staticClass:"mb-2 pt-1 pb-1"},[e("div",{staticClass:"header pb-1"},[e("mu-avatar",{attrs:{color:"indigo",size:"40"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.user.avatarUrl,expression:"item.user.avatarUrl"}],staticClass:"icon",attrs:{alt:s.user.nickname}})]),e("div",{staticClass:"text ml-1"},[e("p",{staticClass:"font-md pb-1"},[t._v(t._s(s.user.nickname))]),e("p",[t._v(t._s(t.getLocalTime(s.showTime)))])])],1),0==s.pics.length?e("section",{staticClass:"content"},[e("p",{staticClass:"pt-1 pb-1"},[t._v(t._s(JSON.parse(s.json).msg))]),e("video",{ref:"video"+a,refInFor:!0,attrs:{poster:JSON.parse(s.json).video.coverUrl},on:{click:function(e){t.setPlay("video"+a,a,JSON.parse(s.json).video.videoId)}}})]):e("section",{staticClass:"content"},[e("p",{staticClass:"pt-1 pb-1"},[t._v(t._s(JSON.parse(s.json).msg))]),e("div",{staticClass:"flex"},[t._l(s.pics,function(t,s){return e("div",{key:s,staticClass:"pics",style:"backgroundImage:url("+t.squareUrl+")"})}),s.pics.length%3<=1&&s.pics.length%3>0?e("div",{staticClass:"pics"}):t._e(),s.pics.length%3<=2&&s.pics.length%3>0?e("div",{staticClass:"pics"}):t._e()],2)])])}),0)],1)],1)],1)],1)},i=[],n=e("cebc"),r=e("2f62"),c={name:"circles",computed:Object(n["a"])({},Object(r["c"])(["getDynamic"])),data:function(){return{num:30,refreshing:!1,loading:!1,text:"List",nowPlay:-1}},methods:Object(n["a"])({},Object(r["b"])(["getUserDynamic","getVideoUrl"]),{refresh:function(){var t=this;this.refreshing=!0,this.$refs.container.scrollTop=0,this.getUserDynamic({pagesize:30,refresh:!0}).then(function(s){t.refreshing=!1})},load:function(){var t=this;this.loading=!0,this.getUserDynamic({pagesize:30,refresh:!1}).then(function(s){t.loading=!1})},getLocalTime:function(t){function s(t){return t<10?"0"+t:t}var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate(),r=e.getHours(),c=e.getMinutes();e.getSeconds();return a+"/"+s(i)+"/"+s(n)+" "+s(r)+":"+s(c)},setPlay:function(t,s,e){var a=this,i=this.$refs[t][0];-1!=this.nowPlay&&this.nowPlay.pause(),this.getVideoUrl(e).then(function(t){console.log(t),i.setAttribute("src",t.urls[0].url),i.setAttribute("controls",!0),i.play(),a.nowPlay=i})}}),created:function(){this.getUserDynamic({pagesize:30,refresh:!1})}},o=c,l=(e("231b"),e("2877")),u=Object(l["a"])(o,a,i,!1,null,"2bca9800",null);s["default"]=u.exports}}]);