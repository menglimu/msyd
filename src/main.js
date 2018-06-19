// //解决兼容性
// import Es6Promise from 'es6-promise'
// Es6Promise.polyfill()

import Vue from "vue"
import App from "./App"
import router from "./router"

//加载权限、主题方法
import {changeTheme,getStore} from "@/utils"

//使用mock，打包，联调注释
require("@/api/mock")

//全局事件bus
Vue.$bus = Vue.prototype.$bus = new Vue()
//使用rem
require("@/utils/rem")
//旋转转圈，消息提示，全局组件
require('@/components/global/loadMask')
require('@/components/global/messageBox')
//网络请求
require("@/api/") 

//添加路由拦截器
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && !getStore("token")) { // 判断该路由是否需要登录权限
    router.push("/login")
  } else {
    next()
  }
  let thisPageTitle = to.meta.title ? to.meta.title : ''
  document.title = thisPageTitle
})

//加载主题文件
getStore("theme") && changeTheme(getStore("theme"))

//载初始
new Vue({
  el: "#app",
  router,
  render: h => h(App)
})

