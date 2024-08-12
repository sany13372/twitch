import {IGameStream} from "./category.types";

export enum SelectCategoryStreamEnum {
    Categories = 'Categories',
    LiveChannels = 'Live Channels',

}

export interface IStreamUser {
    id:number
    attributes:{
        nickname:string
        avatar:string
        usersCount:number
        gameStream?:{
            data: IGameStream
        }
        videoLive:{
            data:IVideoLive
        }
        live?:boolean
    }
}

export interface IVideoLive {
    id:number
    attributes:{
        streamer:{
            data:IStreamUser
        }
        videoName:string
        category:string
        videoImg:string
    }
}

export interface IMessage {
    text:string
    userId:string
    userName:string
    socketId:string
}