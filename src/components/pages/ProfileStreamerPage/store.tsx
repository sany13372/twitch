import {IStreamUser} from "../../../types";
import {create} from "zustand";


interface IStoreProfilePage {
    profileUser: IStreamUser
    setProfileUser: (profile:IStreamUser) => void
}

export const useStoreProfilePage = create<IStoreProfilePage>((set) => ({
    profileUser: {} as IStreamUser,
    setProfileUser: (profile:IStreamUser) => set({profileUser:profile}),
}))