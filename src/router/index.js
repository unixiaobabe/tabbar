import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/goodlist',
    component:() => import('../views/Home.vue'),
    children:[
      {
        path:'/goodlist',
        component:() => import('../views/MyGoodList.vue')
      },
      {
        path:'/goodsearch',
        component:() => import('../views/MyGoodSearch.vue')
      },
      {
        path:'/userinfo',
        component:() => import('../views/MyUserinfo.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
