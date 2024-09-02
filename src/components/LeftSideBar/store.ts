import {create} from 'zustand'
import {IStreamsData} from "../../types";


interface IStoreLeftSideBar {
    streamUsers: IStreamsData[]
    setStreamUsers: (users: IStreamsData[] | []) => void
}

export const useStoreLeftSideBar = create<IStoreLeftSideBar>((set) => ({
    streamUsers: [],
    setStreamUsers: (value) => set(() => ({streamUsers: value})),
    recommendedChannels: []
}))