import axios from "../interceptor";
import {AxiosResponse} from "axios";
import {IMessage} from "../types";

export const MessagesServices = {
    async getMessages() {
        return axios.get<AxiosResponse<IMessage[]>>('messages?populate=*')
    },
}