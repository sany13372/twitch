import {IStreamUser} from "./index";

interface IImgAttributes {
    alternativeText:string | null
    caption: string | null
    createdAt:string
    ext:string
    hash:string
    height:number
    mime:string
    name:string
    previewUrl:null
    provider:string
    provider_metadata:null
    size:number
    updatedAt:string
    url: string
    width: number
}

interface IImgFormatsAttributes extends IImgAttributes{
    formats:{
        large: IImgAttributes
        medium: IImgAttributes
        small: IImgAttributes
        thumbnail: IImgAttributes
    }
}

export interface  IGameStream {
    id:number
    attributes:{
        categoryGame: string
        createdAt: string
        publishedAt: string
        updatedAt: string
        categoryImg:{
            data:{
                id:number
                attributes:IImgFormatsAttributes
            }[]
        }
        streamers: {
            id:number
            data:IStreamUser[]
        } | undefined
    }
}
