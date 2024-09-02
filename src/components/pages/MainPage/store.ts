import {IStreams, IStreamsData, SelectCategoryStreamEnum} from "../../../types";
import {create} from "zustand";
import {IGameStream} from "../../../types/category.types";


interface IStoreMainPage {
    selectCategoryStream: SelectCategoryStreamEnum
    setSelectCategoryStream: (select:SelectCategoryStreamEnum) => void
    searchTagValue:string
    setSearchTagValue:(val:string) => void
    streams:IStreamsData[]
    setStreams:(val:IStreamsData[]) => void
    gameCategories:IGameStream[];
    setGameCategories:(val:IGameStream[]) => void
}

export const useStoreMainPage = create<IStoreMainPage>((set) => ({
    selectCategoryStream: SelectCategoryStreamEnum.LiveChannels,
    setSelectCategoryStream: (newSelect:SelectCategoryStreamEnum) => set({selectCategoryStream:newSelect}),
    searchTagValue:'',
    setSearchTagValue:(val:string) => set({searchTagValue:val}),
    streams:[],
    setStreams:(val:IStreams[]) => set({streams:val}),
    gameCategories:[],
    setGameCategories:(val:IGameStream[]) => set({gameCategories:val})
}))