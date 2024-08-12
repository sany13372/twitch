import { IVideoLive, SelectCategoryStreamEnum} from "../../../types";
import {create} from "zustand";
import {IGameStream} from "../../../types/category.types";



interface IStoreMainPage {
    selectCategoryStream: SelectCategoryStreamEnum
    setSelectCategoryStream: (select:SelectCategoryStreamEnum) => void
    searchTagValue:string
    setSearchTagValue:(val:string) => void
    liveVideos:IVideoLive[]
    setLiveVideos:(val:IVideoLive[]) => void
    gameCategories:IGameStream[];
    setGameCategories:(val:IGameStream[]) => void
}

export const useStoreMainPage = create<IStoreMainPage>((set) => ({
    selectCategoryStream: SelectCategoryStreamEnum.LiveChannels,
    setSelectCategoryStream: (newSelect:SelectCategoryStreamEnum) => set({selectCategoryStream:newSelect}),
    searchTagValue:'',
    setSearchTagValue:(val:string) => set({searchTagValue:val}),
    liveVideos:[],
    setLiveVideos:(val:IVideoLive[]) => set({liveVideos:val}),
    gameCategories:[],
    setGameCategories:(val:IGameStream[]) => set({gameCategories:val})
}))