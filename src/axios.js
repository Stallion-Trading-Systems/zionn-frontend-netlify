import axios from 'axios'



const API = axios.create({
    baseURL: 'https://zionn-stage.herokuapp.com/'
    // baseURL: 'http://localhost:8080/'

})

API.interceptors.request.use((req) => {
    return req
})


export const userSignUp = async (userData) => {

    console.log(userData);

    let user = await API.post('/auth/signup', userData)

    return user;
}

export const otpVerify = async (signupData) => {

    console.log(signupData);
    let res = await API.post('/auth/otpverify', signupData)

    return res;
}

export const onBoarding = async (onBoardData) => {

    let res = await API.post('/auth/onboarding', onBoardData)
    return res
}

export const userSignIn = async (userData) => {
    let res = await API.post("/auth/login", userData)
    return res;
}


export const getCompanyData = async (cname) => {
    let res = await API.post("/company/getreport", {
        cname
    })
    return res;
}

export const storeShares = async (sharedata) => {
   
    let res = await API.post("/transaction/sell", sharedata)
    return res;
}

export const scoopsData = async ()=>{
    let res=await API.get("/getnews/getscoop")
    return res;
}

export const newsData = async (company)=>{
    let res=await API.post("/getnews/get",{company})
    return res;
}

export const getInvesData = async (company)=>{
    let res=await API.post("/investments/getinv",{company})
    return res;
}

export const getSharePriceHis = async (company)=>{
    let res=await API.post("/investments/getshareprice",{company})
    return res;
}

export const getLastSharePrice = async (company)=>{
    let res=await API.post("/investments/lastshareprice",{company})
    return res;
}