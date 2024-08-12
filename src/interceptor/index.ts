import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Content-Type': 'application/json',
    },
})



instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken')
    if (config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

export default instance
export const axiosClassic = axios.create({
    baseURL: `http://localhost:1337/api`,
    headers: {
        'Content-Type': 'application/json',
    },
})
