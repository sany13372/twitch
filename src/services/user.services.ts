import axios  from "../interceptor";
import {IStreamUser} from "../types";

export const UserServices = {
    async getUsers() {
        return axios.get<IStreamUser[]>('users?populate=*')
    },
    async getUser(id:number) {
        return axios.get<IStreamUser>(`users/${id}?populate=*`)
    },
    async updateUser(id:number,dto:any){
        return axios.put(`users/${id}?populate=*`,dto)
    }
}
