import {axiosClassic} from "../interceptor";
import {AxiosResponse} from "axios";
import {IVideo} from "../types";

export const VideoServices = {
    async getVideos(){
        return axiosClassic.get<AxiosResponse<IVideo[]>>('/videos?populate=*')
    }
}