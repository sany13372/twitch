import axios from "../interceptor";
import {AxiosResponse} from "axios";
import {IProfileInfo, IStreamUser} from "../types";

export interface IDtoProfileInfo {
    aboutTitle?:string
    profileBg?:string
    user?:IStreamUser | null
}
export const ProfileInfoServices = {
    async create(dto:IDtoProfileInfo) {
        return axios.post<AxiosResponse<IProfileInfo,IDtoProfileInfo>>('profile-infos?populate=*',{data:dto})
    },
    async update(id:number,dto:IDtoProfileInfo) {
        return axios.put<AxiosResponse<IProfileInfo,IDtoProfileInfo>>(`profile-infos/${id}?populate=*`,{data:dto})
    },

}