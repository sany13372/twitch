import axios from "../interceptor";
import {IGameStream, IStreamUser} from "../types";
import {AxiosResponse} from "axios";

export const CategoryStreamServices = {
    async getCatigories() {
        return axios.get<AxiosResponse<IGameStream[]>>('category-games?populate=*')
    },
}