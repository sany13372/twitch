import axios from "../interceptor";
import {IDataUserRequest, IUserProfile} from "../types/user.types";
import {IVideoLive} from "../types";
import {AxiosResponse} from "axios";

export const VideoServices = {
    async createVideo (dataDto:IVideoLive) {
        return axios.post<IUserProfile, IDataUserRequest>('/video-lives', {...dataDto})
    },

    async getVideos(){
        return axios.get<AxiosResponse<IVideoLive[]>>('/video-lives?populate=*')
    }


}