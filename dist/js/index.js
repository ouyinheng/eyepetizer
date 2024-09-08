/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    document.addEventListener('backbutton', this.onBackKeyDown.bind(this), false)
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  },
  onBackKeyDown: function () {
    console.log(window.location.href)
    console.log(window.location.href.split('#/')[1])
    const href = window.location.href.split('#/')[1];
    const list = ['home', 'discover', 'circle', 'mine'];
    if(!list.includes(href)) {
      history.back()
      return;
    }
    window.plugins.toast.showLongCenter('再按一次退出', function (a) {
      console.log('toast success: ' + a)
    }, function (b) {
      alert('toast error: ' + b)
    })
    document.removeEventListener("backbutton", this.onBackKeyDown, false); // 注销返回键
    document.addEventListener("backbutton", this.exitApp, false); //绑定退出事件
    // 3秒后重新注册
    var intervalID = window.setInterval(function () {
      window.clearInterval(intervalID);
      document.removeEventListener("backbutton", this.exitApp, false); // 注销返回键
      document.addEventListener("backbutton", this.onBackKeyDown, false); // 返回键
    }, 3000);
  },
  exitApp: function() {
    navigator.app.exitApp();
  }
};

app.initialize();