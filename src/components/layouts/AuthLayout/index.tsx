import {FC, PropsWithChildren} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {removeTokensStorage} from "../../../utils/authHelper";
import {useStoreAuthLayout} from "../layoutStore";

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const user = useStoreAuthLayout((store) => store.user)
    const setUser = useStoreAuthLayout((store) => store.setUser)
    const {pathname} = useLocation()
    const nav = useNavigate()

    const logout = () => {
        removeTokensStorage()
        localStorage.removeItem('user')
        nav('/')
    }

    // useEffect(() => {
    //     const readyUser = localStorage.getItem('user')
    //     const accessToken = Cookies.get('accessToken')
    //     if (readyUser) {
    //         UserService.getById(JSON.parse(readyUser)._id)
    //             .then((data) => setUser(data.data))
    //     }
    //     if (accessToken) checkAuth({refreshToken})
    // }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    return <>{children}</>
}

export default AuthProvider
