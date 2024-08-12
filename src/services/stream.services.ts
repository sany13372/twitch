import axios from "../interceptor";
import {IStreamUser} from "../types";
import {AxiosResponse} from "axios";

export const StreamServices = {
    async getStreamers() {
        return axios.get<AxiosResponse<IStreamUser[]>>('streamers?populate=*')
    },
    async getStreamer(id:string) {
        return axios.get<AxiosResponse<IStreamUser>>(`streamers/${id}?populate=*`)
    },
}