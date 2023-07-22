import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import '@/mock/mockServe'
import 'swiper/css/swiper.min.css';

new Vue({
    render:h => h(App),
    router,
    store
}).$mount('#app')