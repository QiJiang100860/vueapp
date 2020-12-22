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
            redirect: "/login"
        },
        // 登陆
        {
            path: "/login",
            name: "login",
            component: () => import('@/views/login')
        },
        
        // 登陆
        {
            path: "/home",
            name: "home",
            component: () => import('@/views/home')
        },

        // // 框架
        // {
        //     path: "/frame",
        //     name: "frame",
        //     component: () => import('@/views/frame'),
        //     children:[
        //         {
        //             path:'/index',
        //             name:'home_index',
        //             component:()=> import('@/views/frame/index')
        //         }
        //     ]
        // }
    ]
})
