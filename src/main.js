import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
import '@/mock/mockServe'
import 'swiper/css/swiper.min.css';

new Vue({
    render:h => h(App),
    router,
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount('#app')