import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/tabbar/home.vue'
import member from '../components/tabbar/member.vue'
import search from '../components/tabbar/search.vue'
import shopcar from '../components/tabbar/shopcar.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {
      path: '/home', component : home
      /* name: 'HelloWorld',
      // component: HelloWorld */
    },
    {path:'/member',component: member},
    {path: '/search',component: search },
    {path:'/shopcar',component:shopcar}
  ],
  linkActiveClass : 'mui-active'
})
