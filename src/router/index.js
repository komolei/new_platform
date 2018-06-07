import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const logIn = () => import('@/components/header/header.vue')
const notFind = () => import('@/components/public/notFind.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '*',
      name: '404',
      component: notFind
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: logIn
    // },
    {
      path:'/',
      name:'index',
      component:function(resolve){
        require(['@/views/index.vue'],resolve)
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  // if(to.name=='login'){
  //   next()
  // }
  next()

})
export default router
