import {FC, memo} from 'react';
import styles from './RightBlock.module.scss'
import KoronaImg from '../assets/Korona.svg'
import ChestImg from '../assets/Chest.svg'
import MessageImg from '../assets/Message.svg'
import LogImg from '../assets/Log.svg'
import ButtonImg from '../assets/Button.svg'
import AvatarImg from '../assets/Avatar.svg'
import PickImg from '../assets/Pick.svg'
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import { CiUser } from "react-icons/ci";
import {removeTokensStorage} from "../../../utils/authHelper";
import {useNavigate} from "react-router-dom";

const RightBlock: FC = () => {
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const openModalHandle = (typeModal:string) => setOpenModal(typeModal)
    const user = useStoreAuthLayout((store) => store.user)
    const setUser = useStoreAuthLayout((store) => store.setUser)
    const nav = useNavigate()

    const logout = () => {
        removeTokensStorage()
        localStorage.removeItem('user')
        nav('/')
        setUser(null)
    }
    return (
        <div className={styles.rightBlock}>
            <img src={KoronaImg} alt="Logo"/>
            <img src={LogImg} alt="Logo"/>
            {user && user?.email ? <>
                <img src={ChestImg} alt="Logo"/>
                <img src={MessageImg} alt="Logo"/>
                <img src={PickImg} alt="Logo"/>
                <button><img src={ButtonImg} alt="Logo"/> <h4>Get Ad-Free</h4></button>
                <img src={AvatarImg} onClick={logout} alt="Logo"/>
            </> : <>
                <button onClick={() => openModalHandle('LogIn')} className={styles.buttonLogIn}>Log In</button>
                <button onClick={() => openModalHandle('SignUp')} className={styles.buttonSignUp}>Sign Up</button>
                <CiUser color="white" cursor="pointer" />
            </>}
        </div>
    );
}

export default memo(RightBlock);