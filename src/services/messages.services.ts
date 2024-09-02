import axios from "../interceptor";
import {AxiosResponse} from "axios/index";
import {IStreamsData} from "../types";

export const MessagesServices = {
    async getMessages() {
        return axios.get<AxiosResponse<any>>('messages?populate=*')
    },
}