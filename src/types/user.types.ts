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

export enum UserRole {
    Authenticated = 'Authenticated'
}
export interface IUserProfile{
    blocked?:boolean
    confirmed:boolean
    createdAt?:string
    email:string
    followers: number | null
    id: number
    provider?:string
    updatedAt?:string
    username: string
}
export interface IDataUserRequest {
    jwt:string
    user:IUserProfile
}
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IInputs {
    email: string
    password: string
    username:string
}

export interface IAuthPageInput {
    register: UseFormRegister<IInputs>
    errors: FieldErrors<IInputs>
    placeholder?:string
    title?:string
}