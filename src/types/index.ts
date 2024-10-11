import {IGameStream} from "./category.types";


export interface Base {
    createdAt: string
    id: number
    publishedAt: string
    updatedAt: string
}

export enum SelectCategoryStreamEnum {
    Categories = 'Categories',
    LiveChannels = 'Live Channels',

}

export interface IStreamsDataAttributes extends Base {
    categoryGame: string
    gameStream: {
        data:IGameStream
    }
    videoName: string
    videoImg: string
    usersCount: number
    user: {
      data:{
          id: number
          attributes: IStreamUser
      }
    }
}

export interface IStreamsData {
    id: number
    attributes: IStreamsDataAttributes
}

export interface IProfileInfo{
    id:number
    aboutTitle:string | null
    profileBg:string | null
}
export interface IStreamUser extends Base {
    blocked: boolean
    confirmed: boolean
    email: string
    follows: IStreamUser[]
    followers: IStreamUser[]
    provider: string
    streams: IStreamsData[]
    username: string
    avatar:string
    profileInfo: IProfileInfo
}

export interface IMessage {
    id:number
    attributes: IMessageAttributes
}

interface IMessageAttributes extends Omit<Base, "id">{
    user: string,
    message: string,
    userId:string,
    streamId:string
}

export interface IVideo {
    id:string
    attributes: IVideoAttributes
}

interface IVideoAttributes extends Pick<IStreamsDataAttributes, 'user' | 'videoName' | 'videoImg'> {
    videoTime:number
    gameCategory:string
    views:number
    createdAt:string
}