import {IVideo, SelectCategoryStreamEnum} from "../../../types";
import {create} from "zustand";
import VideoImg1 from './assets/Video1.png'
import VideoImg2 from './assets/Video2.png'
import VideoImg3 from './assets/Video3.png'
import VideoImg4 from './assets/Video4.png'


interface IStoreMainPage {
    selectCategoryStream: SelectCategoryStreamEnum
    setSelectCategoryStream: (select:SelectCategoryStreamEnum) => void
    searchTagValue:string
    setSearchTagValue:(val:string) => void
    liveVideos:IVideo[]
    setLiveVideos:(val:IVideo[]) => void
}

export const videosDefault:IVideo[] = [
    {
        videoName:'TSM @Subroza NEW ACT 🔴RADIANT RA…',
        category:['professional','English','valorant','pro'],
        userName:'Subroza',
        videoImg: VideoImg1
    },
    {
        videoName:'SHANKS | THE GREATEST ISO MAIN YOU …',
        category:['English'],
        userName:'shanks_ttv',
        videoImg:VideoImg2
    },
    {
        videoName:'RANK1 ISO NEW ACT NEW ME 30 MIN DEL…',
        category:['English'],
        userName:'sinatraa',
        videoImg:VideoImg3
    },
    {
        videoName:'CARRYING MYSELF OUT FROM THE DEPT…',
        category:['English'],
        userName:'Emmyuh',
        videoImg:VideoImg4
    },
]
export const useStoreMainPage = create<IStoreMainPage>((set) => ({
    selectCategoryStream: SelectCategoryStreamEnum.LiveChannels,
    setSelectCategoryStream: (newSelect:SelectCategoryStreamEnum) => set({selectCategoryStream:newSelect}),
    searchTagValue:'',
    setSearchTagValue:(val:string) => set({searchTagValue:val}),
    liveVideos:videosDefault,
    setLiveVideos:(val:IVideo[]) => set({liveVideos:val})
}))