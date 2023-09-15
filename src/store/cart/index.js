import {cartList} from '@/api'
const state={
    carList:[],
    uuid_token : 'cc-1-gg-2-ss'
}
const mutations = {
    GETCARLIST(state, carList){
        state.carList = carList
    }
}
const actions = {
    async getcartlist(context){
        let result = await cartList()
        if(result.code == 200){
            context.commit('GETCARLIST',result.data)
        }          
    }
}
const getters = {
    cartLists(){
        if(state.carList[0])
            return state.carList[0].cartInfoList
        else 
            return undefined
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}