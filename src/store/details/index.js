import { reqDetails, addToCard} from "@/api"
const state = {
   details:{},
}
const mutations = {
    DETAILS(state, details){
        state.details = details
    }
}
const actions = {
    async details(context,id){
        let result = await reqDetails(id)
        if (result.code == 200){
            context.commit('DETAILS',result.data)
        }          
    },
    async addcard(context,{skuId, skuNum}){
        let result = await addToCard(skuId, skuNum)
        if (result.code == 200)
            return 'ok'
        else 
            return Promise.reject(new Error('failed'))
    }

}
const getters = {
    commodityDetails(){
        return state.details || undefined
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
