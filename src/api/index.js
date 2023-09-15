import requests from "./ajaxRequest";
import mockRequest from "./mockRequest";
export const reqCategoryList = ()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get',
    })
}

export const reqSearchInfo = (params)=>{
    return requests({
        url:'/list',
        method:'post',
        data:params
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

export const reqDetails = (id)=>{
    return requests({
        url:`/item/${id}`,
        method:'get',
    })
}

export const addToCard = (skuId,skuNum)=>{
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post',
    })
}

export const cartList = ()=>{
    return requests({
        url:"/cart/cartList",
        method:'get',
    })
}
