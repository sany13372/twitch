import Cookies from 'js-cookie'

import {IAuthResponse} from '../types/user.types'

export const saveTokensStorage = (jwt:string) => {
    Cookies.set('accessToken', jwt)
}

export const saveToStorage = (data: IAuthResponse,jwt:string) => {
    saveTokensStorage(jwt)
    localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
    Cookies.remove('accessToken')
}