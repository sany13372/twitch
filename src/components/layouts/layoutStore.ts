import {create} from "zustand";
import {GameEnum} from "../../types";
import AvatarSideBar1 from "../../assets/AvatarSideBar1.png";
import AvatarSideBar2 from "../../assets/AvatarSideBar2.png";
import AvatarSideBar3 from "../../assets/AvatarSideBar3.png";
import AvatarSideBar4 from "../../assets/AvatarSideBar4.png";
import AvatarSideBar5 from "../../assets/AvatarSideBar5.png";


interface IStoreAuthLayout {

}
export const useStoreAuthLayout = create<IStoreLeftSideBar>((set) => ({
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
}))