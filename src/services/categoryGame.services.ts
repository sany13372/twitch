import axios from "../interceptor";
import {AxiosResponse} from "axios";
import {IGameStream} from "../types/category.types";

export const CategoryStreamServices = {
    async getCatigories() {
        return axios.get<AxiosResponse<IGameStream[]>>('category-games?populate=*')
    },
}