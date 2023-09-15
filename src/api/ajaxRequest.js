import axios from "axios"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
import uuid from '@/store/cart'
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
})

requests.interceptors.request.use((config)=>{
    if(uuid.state.uuid_token){
        config.headers.userTempId = uuid.state.uuid_token
    }
    nProgress.start()
    return config
})

requests.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
},(error)=>{
    console.log('error')
})

export default requests