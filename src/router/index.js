/*
权限控制，通过修改meta来控制
全站路由处理
order by qinhaozhi Data:20170915
(Remember to write down each change)
*/
import Vue from 'vue'
import Router from 'vue-router'
import router from '@common/router'//根据noKeepAlive判断是否缓存

const notFound = () => import('@/page/notFound/notFound') // 404页面


Vue.use(Router)

let routerInfo = [

  {
  },
  {
    path: '*',
    meta: {
      title: "",
      noKeepAlive: true,
      noShowMenu: true,
      hasPower: true,
    },
    component: notFound
  },
  
]
// setTimeout(()=>{
//   staticRouter.addRoutes(routerInfo)
// },5000)
// export {routerInfo}
export default new Router({
  mode: 'history',
  base: process.env.URL_BASE,
  routes: routerInfo

})
