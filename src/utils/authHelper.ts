import Cookies from 'js-cookie'

import {IStreamUser} from "../types";

export const saveTokensStorage = (jwt:string) => {
    Cookies.set('accessToken', jwt)
}

export const saveToStorage = (data: IStreamUser,jwt:string) => {
    saveTokensStorage(jwt)
    localStorage.setItem('user', JSON.stringify(data))
}

export const removeTokensStorage = () => {
    Cookies.remove('accessToken')
    localStorage.removeItem('user')
}