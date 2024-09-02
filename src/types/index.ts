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

// export interface IStreams {
//     id: number
//     attributes: Omit<IStreamsData, 'users' | 'gameStream'>
// }

export interface IStreamUser extends Base {
    avatar: string
    blocked: boolean
    confirmed: boolean
    email: string
    follows: IStreamUser[]
    followers: IStreamUser[]
    provider: string
    streams: IStreamsData[]
    username: string
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