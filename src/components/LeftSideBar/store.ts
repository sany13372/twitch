import {create} from 'zustand'
import {GameEnum, IStreamUser} from "../../types";
import AvatarSideBar1 from '../../assets/AvatarSideBar1.png'
import AvatarSideBar2 from '../../assets/AvatarSideBar2.png'
import AvatarSideBar3 from '../../assets/AvatarSideBar3.png'
import AvatarSideBar4 from '../../assets/AvatarSideBar4.png'
import AvatarSideBar5 from '../../assets/AvatarSideBar5.png'
import AvatarSideBar6 from '../../assets/AvatarSideBar6.png'
import AvatarSideBar7 from '../../assets/AvatarSideBar7.png'
import AvatarSideBar8 from '../../assets/AvatarSideBar8.png'
import AvatarSideBar9 from '../../assets/AvatarSideBar9.png'
import AvatarSideBar10 from '../../assets/AvatarSideBar10.png'
import AvatarSideBar11 from '../../assets/AvatarSideBar11.png'

interface IStoreLeftSideBar {
    streamUsers: IStreamUser[]
    setStreamUsers: (users: IStreamUser[] | []) => void
    recommendedChannels: IStreamUser[]

}

export const useStoreLeftSideBar = create<IStoreLeftSideBar>((set) => ({
    streamUsers: [{
        usersCount: 200,
        name: 'sinatraa',
        game: GameEnum.VALORANT,
        avatar: AvatarSideBar1,
        live: true
    },
        {usersCount: 20000, name: 'Subroza', game: GameEnum.VALORANT, avatar: AvatarSideBar2, live: true},
        {usersCount: 3000, name: 'ECLS', game: GameEnum.CounterStrike, avatar: AvatarSideBar3, live: true},
        {usersCount: 500, name: 'schrodingerLee', game: GameEnum.CounterStrike, avatar: AvatarSideBar4, live: true},
        {usersCount: 0, name: 'Caedrel', game: GameEnum.CounterStrike, avatar: AvatarSideBar5, live: false},
    ],
    setStreamUsers: () => set((state) => ({streamUsers: state.streamUsers})),
    recommendedChannels: [
        {
            usersCount: 1600,
            name: 'shanks_ttv',
            game: GameEnum.VALORANT,
            avatar: AvatarSideBar6,
            live: true
        },
        {
            usersCount: 311,
            name: 'Emmyuh',
            game: GameEnum.VALORANT,
            avatar: AvatarSideBar7,
            live: true
        },
        {
            usersCount: 3100,
            name: 'joshseki',
            game: GameEnum.VALORANT,
            avatar: AvatarSideBar8,
            live: true
        },
        {
            usersCount: 1300,
            name: 'ShivFPS',
            game: GameEnum.ApexLegends,
            avatar: AvatarSideBar9,
            live: true
        },
        {
            usersCount: 7300,
            name: 'HisWattson',
            game: GameEnum.ApexLegends,
            avatar: AvatarSideBar10,
            live: true
        },
        {
            usersCount: 24,
            name: 'Woohoojin',
            game: GameEnum.ApexLegends,
            avatar: AvatarSideBar11,
            live: true
        },
    ]
}))