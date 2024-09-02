import axios from "../interceptor";
import {IStreamsData, IStreamUser} from "../types";
import {AxiosResponse} from "axios";

export const StreamServices = {
    async getStreamers() {
        return axios.get<AxiosResponse<IStreamsData[]>>('streamers?populate=*')
    },
    async getStreamer(id:string) {
        return axios.get<AxiosResponse<IStreamsData>>(`streamers/${id}?populate=*`)
    },
    async updateStreamer(dataDto:any,id:number) {
        return axios.put<AxiosResponse<IStreamsData>>(`streamers/${id}?populate=*`,{data:dataDto})
    },
}