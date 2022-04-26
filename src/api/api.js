import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseUrl:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "720135bb-8ef1-4867-bfdd-0542088a0b59"
    }


}
)
export const userAPI={
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => { return response.data; }
            )
    }
}
