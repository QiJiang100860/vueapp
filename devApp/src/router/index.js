import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        // 重定向
        {
            path: '/',
            redirect: "/welcome"
        },
        // 登陆
        {
            path: "/welcome",
            name: "welcome",
            component: () => import('@/views/welcome')
        },

        // 框架
        {
            path: "/frame",
            name: "frame",
            component: () => import('@/components/PFrame'),
            children:[
                {
                    path:'/home',
                    name:'frame_home',
                    component:()=> import('@/views/home')
                }
            ]
        }
    ]
})
