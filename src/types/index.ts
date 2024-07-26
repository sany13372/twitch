
export enum GameEnum {
    VALORANT = 'Valorant',
    CounterStrike = 'CounterStrike',
    ApexLegends = 'CounterStrike'
}

export enum SelectCategoryStreamEnum {
    Categories = 'Categories',
    LiveChannels = 'Live Channels',

}

export interface IStreamUser {
    name:string
    avatar:string
    usersCount:number
    game?:GameEnum
    live?:boolean
}

export interface IVideo {
    userName:string
    videoName:string
    category:string[]
    videoImg:string
}

export interface IMessage {
    text:string
    userId:string
    userName:string
    socketId:string
}