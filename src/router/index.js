import VueRouter from 'vue-router'
import  Vue from 'vue'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Search from '@/pages/Search'

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/login',
            component:Login,
            meta:{FooterShow:true}
        },
        {
            path:'/reg', 
            component:Reg,
            meta:{FooterShow:true}
        },
        {
            name:"search",
            path:'/search/:keyword?',
            component:Search,
        },
        {
            path:'*',
            redirect:'/home'
        }
    ],
})