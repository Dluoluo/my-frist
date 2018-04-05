import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1/index'


// 注册路由
Vue.use(Router)
export default new Router({
  //浏览历史
  mode:'history',
  routes: [
    {
      // 路由默认路径及组件
      path:'/',
      component:page1
    }
  ]
})
