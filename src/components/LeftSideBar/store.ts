import {create} from 'zustand'
import {IStreamUser} from "../../types";


interface IStoreLeftSideBar {
    streamUsers: IStreamUser[]
    setStreamUsers: (users: IStreamUser[] | []) => void
    recommendedChannels: IStreamUser[]

}

export const useStoreLeftSideBar = create<IStoreLeftSideBar>((set) => ({
    streamUsers: [],
    setStreamUsers: (value) => set(() => ({streamUsers: value})),
    recommendedChannels: []
}))