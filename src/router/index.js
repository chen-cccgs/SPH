import VueRouter from 'vue-router'
import  Vue from 'vue'

Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Reg from '@/views/Reg'
import Search from '@/views/Search'

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