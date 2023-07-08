import { Vue } from 'vue'
import VueRouter from vue-router
Vue.use(Vuerouter)

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Search from '@/pages/Search'

export default new VueRouter({
    router:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/Reg',
            components:Reg
        },
        {
            path:'/Search',
            components:Search
        }
    ]
})