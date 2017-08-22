import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Index from '@/components/index'
import Index1 from '@/view/index/index1'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Index1
    }
  ]
})
