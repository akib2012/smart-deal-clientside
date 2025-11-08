import axios from "axios";

const intance = axios.create({
    baseURL: 'http://localhost:3000',
}) 

const useAxiosSecure = () => {
    intance.interceptors.request.use((config) => {
        console.log(config)
        return config;
    })

    return intance;
}

export default useAxiosSecure;