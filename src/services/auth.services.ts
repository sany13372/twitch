import {axiosClassic} from "../interceptor";
import {IDataUserRequest, IUserProfile} from "../types/user.types";

export const AuthServices = {

    async registerUser(dataDto: { username: string, email: string, password: string }) {
        return axiosClassic.post<IUserProfile, {data:IDataUserRequest}>('/auth/local/register', {...dataDto})
    },

    async loginUser(dataDto: { identifier: string, password: string }) {
        return axiosClassic.post<IUserProfile, {data:IDataUserRequest}>('/auth/local', {...dataDto})
    },

    async getUsers() {
        return axiosClassic.get<IUserProfile[]>('users')
    }
}