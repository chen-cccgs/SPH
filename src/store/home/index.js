import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    },
}
const actions = {
    async categoryList(context){
        let result = await reqCategoryList()
        if(result.code == 200){
            context.commit('CATEGORYLIST',result.data)
        }
    },
    async bannerList(context){
        let result = await reqBannerList()
        if(result.code == 200){
            context.commit('BANNERLIST',result.data)
        }
    },
    async floorList(context){
        let result = await reqFloorList()
        if(result.code == 200){
            context.commit('FLOORLIST',result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
