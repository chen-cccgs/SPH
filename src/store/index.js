import Vue from "vue";
import vuex from 'vuex'
Vue.use(vuex)
import './home'
import './search'
export default new vuex.Store({
    modules:{
        home,
        search
    }
})