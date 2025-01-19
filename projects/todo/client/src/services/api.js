import axios from "axios"
import { getStoredToken } from "../utils/storage"
import toast from "react-hot-toast";
const api = axios.create({
    baseURL:"http://localhost:5000",
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