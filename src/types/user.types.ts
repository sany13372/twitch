import {IStreamUser} from "./index";


export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IInterfaceEmailPassword {
    email: string
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IStreamUser,
}

export interface IDataAuth {
    user: IStreamUser,
    accessToken: string,
    refreshToken: string
}

export interface IDataDto{
    nickName:string
    password:string
}