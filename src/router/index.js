/*
权限控制，通过修改meta来控制
全站路由处理
order by qinhaozhi Data:20170915
(Remember to write down each change)
*/
import Vue from 'vue'
import Router from 'vue-router'

const notFound = () => import('@/page/notFound') // 404页面


Vue.use(Router)

let routerInfo = [

  {
    path: "/",
    component: notFound,
    meta: {
      title: "民生易贷",
    },
  },
  {
    path: '*',
    meta: {
      title: "页面丢失啦~",
    },
    component: notFound
  },
  
]
export default new Router({
  mode: 'history',
  base: process.env.URL_BASE,
  routes: routerInfo

})
