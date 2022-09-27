import axios from 'axios'



const API = axios.create({
    // baseURL: 'https://zionn-stage.herokuapp.com/'
    baseURL: 'https://zionn-prod.herokuapp.com/'
    // baseURL: 'http://localhost:8080/'

})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }

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

export const scoopsData = async () => {
    let res = await API.get("/getnews/getscoop")
    return res;
}

export const newsData = async (company) => {
    let res = await API.post("/getnews/get", {
        company
    })
    return res;
}

export const getInvesData = async (company) => {
    let res = await API.post("/investments/getinv", {
        company
    })
    return res;
}

export const getSharePriceHis = async (company) => {
    let res = await API.post("/investments/getshareprice", {
        company
    })
    return res;
}

export const getLastSharePrice = async (company) => {
    let res = await API.post("/investments/lastshareprice", {
        company
    })
    return res;
}

export const agreement = async (onBoardData) => {

    let res = await API.post('/auth/agreement', onBoardData)
    return res
}

export const emailfp = async (email) => {

    let res = await API.post('/auth/forgetPassword', email)
    return res
}

export const otpfp = async (otp) => {

    let res = await API.post('/auth/fpotpverify', otp)
    return res
}

export const passfp = async (newpass) => {

    let res = await API.post('/auth/resetpassword', newpass)
    return res
}

export const holdings = async ()=>{
    let res = await API.get('/user/dashboard')
    return res;
}

export const sellbuyreq = async (sellbuydetails)=>{
    let res=await API.post("/transaction/sellcompany",sellbuydetails)
    console.log(sellbuydetails);
    return res;
}

export const  getOpenOffer =async (userDetails)=>{
    let res=await API.post("/user/openoffer",userDetails);
    return res;
}

export const  acceptOfferTrans =async (offerDetails)=>{
    let res=await API.post("/user/updatestatus",offerDetails);
    return res;
}