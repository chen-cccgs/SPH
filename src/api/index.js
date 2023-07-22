import requests from "./ajaxRequest";
import mockRequest from "./mockRequest";

export const reqCategoryList = ()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

export const reqBannerList = ()=>{
    return mockRequest({
        url:'/banner',
        method:'get'
    })
}

export const reqFloorList = ()=>{
    return mockRequest({
        url:'/floor',
        method:'get'
    })
}