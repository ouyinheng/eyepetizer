(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["itd"],{"02f4":function(e,t,n){var i=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var o,a,c=String(r(t)),s=i(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var i=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"0916":function(e,t,n){},"0bfb":function(e,t,n){"use strict";var i=n("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"19ec":function(e,t,n){},"214f":function(e,t,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),p=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),v=p?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!t}):void 0;if(!p||!v||"replace"===e&&!l||"split"===e&&!f){var h=/./[d],m=n(a,d,""[e],function(e,t,n,i,r){return t.exec===s?p&&!r?{done:!0,value:h.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),g=m[0],y=m[1];i(String.prototype,e,g),r(RegExp.prototype,d,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"3c0d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"itd"},[n("o-video"),n("music-item")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video"},[n("video",{ref:"video",attrs:{src:e.src,poster:e.poster},on:{click:e.changeControl}}),n("mu-fade-transition",[e.showControls?n("div",{staticClass:"controls",on:{click:e.changeControl}},[n("div",{staticClass:"content"},[e._v("content")]),n("span",{class:["player","iconfont",e.player],on:{click:function(t){return t.stopPropagation(),e.changePlayingStatus(t)}}}),n("footer",{staticClass:"footer"},[n("div",[e._v(e._s(parseInt(e.size)))]),n("mu-slider",{attrs:{min:0,step:1,max:100,color:"#30c27c"},on:{change:e.setSize},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}}),n("div",[e._v("00:00")]),n("div",{staticClass:"iconfont icon-quanping",staticStyle:{"margin-left":"5px",display:"inline-block","font-size":"1rem"},on:{click:function(t){return t.stopPropagation(),e.fullScreen(t)}}})],1)]):e._e()])],1)},a=[];n("a481");function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var r=this,o=arguments;if(t&&clearTimeout(t),i){var a=!t;t=setTimeout(function(){t=null},n),a&&e.apply(r,o)}else t=setTimeout(function(){e.apply(r,o)},n)}}var s=n("5118"),u={name:"ovideo",data:function(){return{refs:null,poster:"http://img.kaiyanapp.com/ad34d6dcdc1a5330d15161f36c009499.jpeg?imageMogr2/quality/60/format/jpg",src:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=14416&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&f=iphone&u=&vc=0",player:"icon-bofang",size:0,showControls:!0,intelvalId:null,setTimeoutId:null,sout:null}},computed:{currentTime:function(){return this.refs.currentTime}},methods:{changePlayingStatus:function(){"icon-bofang"===this.player?(this.player="icon-zanting",this.play()):(this.player="icon-bofang",this.pause())},play:function(){this.refs.play(),this.showControls=!0,c(this.hidenControls,3e3,!1),this.getCurrentTime()},pause:function(){this.refs.pause(),c(this.hidenControls,3e3,!1),Object(s["clearInterval"])(this.intelvalId)},hidenControls:function(){this.showControls=!1},changeControl:function(){this.showControls=!this.showControls},getCurrentTime:function(){var e=this;this.size=this.refs.currentTime,this.intelvalId=Object(s["setInterval"])(function(){e.size=e.refs.currentTime},1e3)},setSize:function(e){this.refs.currentTime=e,this.size=e,this.play()},fullScreen:function(){var e=this.refs;e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.requestFullscreen&&e.requestFullscreen()}},mounted:function(){this.refs=this.$refs.video,this.refs.onwaiting=function(){}}},l=u,f=(n("5d68"),n("2877")),d=Object(f["a"])(l,o,a,!1,null,"648a2446",null),p=d.exports,v=n("04a6"),h={name:"itd",components:{"o-video":p,"music-item":v["a"]}},m=h,g=(n("70ec"),Object(f["a"])(m,i,r,!1,null,"763acb7f",null));t["default"]=g.exports},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},"520a":function(e,t,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,a=r,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(e){var t,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),s&&(t=f[c]),a=r.call(f,e),s&&a&&(f[c]=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),e.exports=a},"5d68":function(e,t,n){"use strict";var i=n("0916"),r=n.n(i);r.a},"5f1b":function(e,t,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,r=1,o={},a=!1,c=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e);s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?p():v()?h():e.MessageChannel?m():c&&"onreadystatechange"in c.createElement("script")?g():y(),s.setImmediate=u,s.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return o[r]=a,i(r),r++}function l(e){delete o[e]}function f(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function d(e){if(a)setTimeout(d,0,e);else{var t=o[e];if(t){a=!0;try{f(t)}finally{l(e),a=!1}}}}function p(){i=function(e){t.nextTick(function(){d(e)})}}function v(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&d(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function m(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;d(t)},i=function(t){e.port2.postMessage(t)}}function g(){var e=c.documentElement;i=function(t){var n=c.createElement("script");n.onreadystatechange=function(){d(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){i=function(e){setTimeout(d,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},"70ec":function(e,t,n){"use strict";var i=n("19ec"),r=n.n(i);r.a},a481:function(e,t,n){"use strict";var i=n("cb7c"),r=n("4bf8"),o=n("9def"),a=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,h){return[function(i,r){var o=e(this),a=void 0==i?void 0:i[t];return void 0!==a?a.call(i,o,r):n.call(String(o),i,r)},function(e,t){var r=h(n,e,this,t);if(r.done)return r.value;var f=i(e),d=String(this),p="function"===typeof t;p||(t=String(t));var g=f.global;if(g){var y=f.unicode;f.lastIndex=0}var b=[];while(1){var x=s(f,d);if(null===x)break;if(b.push(x),!g)break;var T=String(x[0]);""===T&&(f.lastIndex=c(d,o(f.lastIndex),y))}for(var I="",w=0,C=0;C<b.length;C++){x=b[C];for(var k=String(x[0]),_=u(l(a(x.index),d.length),0),S=[],E=1;E<x.length;E++)S.push(v(x[E]));var z=x.groups;if(p){var $=[k].concat(S,_,d);void 0!==z&&$.push(z);var R=String(t.apply(void 0,$))}else R=m(k,d,_,S,z,t);_>=w&&(I+=d.slice(w,_)+R,w=_+k.length)}return I+d.slice(w)}];function m(e,t,i,o,a,c){var s=i+e.length,u=o.length,l=p;return void 0!==a&&(a=r(a),l=d),n.call(c,l,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(s);case"<":c=a[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>u){var d=f(l/10);return 0===d?n:d<=u?void 0===o[d-1]?r.charAt(1):o[d-1]+r.charAt(1):n}c=o[l-1]}return void 0===c?"":c})}})},b0c5:function(e,t,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})}}]);