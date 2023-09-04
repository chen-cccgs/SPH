import {reqSearchInfo} from '@/api'
const state = {
    searchList:{}
}
const mutations = {
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async searchList(context,params={}){
        let result = await reqSearchInfo(params)
        if(result.code == 200){
            context.commit('SEARCHLIST',result.data)
        }
    }
}
const getters = {
    searchList(){
        return state.searchList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
