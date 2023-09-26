import axios from "axios";

// 비로그인 시 가능한 로직
const publicLoanApi = axios.create({
    baseURL: `${process.env.API_BASE_URL}/loans`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const privateLoanApi = axios.create({
    baseURL: `${process.env.API_BASE_URL}/loans`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const loanApi = {

}

export default loanApi;