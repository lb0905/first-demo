// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import {Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource';
Vue.use(VueResource);




Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
