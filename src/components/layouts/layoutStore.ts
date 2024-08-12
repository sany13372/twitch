import {create} from "zustand";
import {IUserProfile} from "../../types/user.types";


interface IStoreAuthLayout {
    user:IUserProfile
    setUser:(user:IUserProfile) => void
    openModal:string
    setOpenModal:(val:string) => void
}
export const useStoreAuthLayout = create<IStoreAuthLayout>((set) => ({
    user: {} as IUserProfile,
    setUser: (value) => set(() => ({user:value})),
    openModal:'',
    setOpenModal: (value) => set(() => ({openModal:value})),
}))