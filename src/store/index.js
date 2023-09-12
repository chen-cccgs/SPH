import Vue from "vue";
import vuex from 'vuex'
Vue.use(vuex)
import home from './home'
import search from './search'
import details from './details'
export default new vuex.Store({
    modules:{
        home,
        search,
        details
    }
})