import axios from 'axios';


const axiosinstance = axios.create({
    baseURL: 'http://localhost:3000'

})

const useinstance = () => {
    return axiosinstance;
}

export default useinstance;