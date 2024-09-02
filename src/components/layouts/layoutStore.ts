import {create} from "zustand";
import {IStreamUser} from "../../types";


export enum OpenModalEnum {
    LogIn ='LogIn',
    SignUp = 'SignUp'
}
interface IStoreAuthLayout {
    user:IStreamUser | null
    setUser:(user:IStreamUser | null ) => void
    openModal:string | OpenModalEnum
    setOpenModal:(val:string | OpenModalEnum) => void
}
export const useStoreAuthLayout = create<IStoreAuthLayout>((set) => ({
    user: {} as IStreamUser,
    setUser: (value) => set(() => ({user:value})),
    openModal:'',
    setOpenModal: (value) => set(() => ({openModal:value})),
}))