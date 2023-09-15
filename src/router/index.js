import VueRouter from 'vue-router'
import  Vue from 'vue'

Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Reg from '@/views/Reg'
import Search from '@/views/Search'
import Details from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
export default new VueRouter({
    mode:"history",
    scrollBehavior(to, from, savedPosition){
        return {y:0}
    },
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
            name:'detail',
            path:'/details/:id',
            component:Details,
        },
        {
            path:'*',
            redirect:'/home'
        },
        {
            name:'addcartsuccess',
            path:'/addcartsuccess',
            component:AddCartSuccess,
        },
        {
            name:'shopcart',
            path:'/shopcart',
            component:ShopCart,
        },
    ],
})