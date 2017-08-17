// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
 preLoad: 1.3,
 error: 'dist/error.png',
 loading: 'dist/loading.gif',
 attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
