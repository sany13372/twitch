import {UserServices} from "../services/user.services";
import {OpenModalEnum} from "../components/layouts/layoutStore";
import {IStreamsData, IStreamUser} from "../types";
//:todo Доработать
export const toggleFollow = (userAuth:IStreamUser | null,setOpenModal:any,isFollow:boolean,user:IStreamsData | IStreamUser,setUserAuth:any) => {
    if (userAuth?.id) {
        const userUpdateDto = {
            follows: {
                connect: isFollow ? [] : [{id: user?.attributes ? user?.attributes?.user.data.id :  user.id, position: {end: true}}],
                disconnect: isFollow ? [{id: user?.attributes ? user?.attributes?.user.data.id : user.id }] : []
            },
            role: {disconnect: [], connect: []},
            streams: {disconnect: [], connect: []},
            followers: {disconnect: [], connect: []}
        }
        UserServices.updateUser(userAuth.id, {...userAuth, ...userUpdateDto})
        UserServices.getUser(userAuth.id)
            .then(({data}) => {
                setUserAuth(data)
            })
    } else {
        setOpenModal(OpenModalEnum.LogIn)
    }

}