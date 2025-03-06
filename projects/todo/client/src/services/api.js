import axios from "axios"
import { getStoredToken } from "../utils/storage"
import toast from "react-hot-toast";
const API_URL = window.env.REACT_APP_API_URL || "http://localhost:5000";
//const API_URL = "http://backend-service.default.svc.cluster.local:5000"
//const API_URL = "http://ab1165ad61cec4a779f44d9e5926c690-1998865140.us-east-1.elb.amazonaws.com:5000"
//const API_URL = "http://backend-service:5000";
console.log("API URL:", API_URL);
console.log("Window URL:", window.env.REACT_APP_API_URL);

const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json'
    },
})

//Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = getStoredToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        toast.error(error);
        return Promise.reject(error);
    }
);

//Response interceptor
api.interceptors.response.use(
    (res) => {
        //toast.success(res.data.msg);
        console.log("API:", API_URL);
        return res.data;
    },
    (err) => {
        const msg = err.response?.data?.error || "An error occured";
        
        toast.error(msg);
        if(err.response?.status == 401) {
            console.log("Error", msg);
        }
        return Promise.reject(msg);
    }
)

export default api;