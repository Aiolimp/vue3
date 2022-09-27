import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Vue-Router 3.x
// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes:  [
//         // 路由配置不变
//     ]
//   })


// Vue-Router 4.0 createRouter 创建路由实例 vue
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

// 抛出路由实例, 在 main.js 中引用
export default router
