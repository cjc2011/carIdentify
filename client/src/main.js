import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'
import 'iview/dist/styles/iview.css';
import  './common/stylus/index.styl';
import {Message} from 'iview'

Vue.prototype.$Message = Message

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
