import {IStreamUser} from "./index";

export interface  IGameStream {
    id:number
    attributes:{
        categoryGame: string
        createdAt: string
        publishedAt: string
        updatedAt: string
        categoryImg:string
        streamers: {
            id:number
            data:IStreamUser[]
        } | undefined
    }
}
