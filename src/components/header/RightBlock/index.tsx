import {FC, memo, useCallback} from 'react';
import styles from './RightBlock.module.scss'
import KoronaImg from '../assets/Korona.svg'
import ChestImg from '../assets/Chest.svg'
import MessageImg from '../assets/Message.svg'
import LogImg from '../assets/Log.svg'
import ButtonImg from '../assets/Button.svg'
import AvatarImg from '../../../assets/Avatar.svg'
import PickImg from '../assets/Pick.svg'
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {CiUser} from "react-icons/ci";
import {removeTokensStorage} from "../../../utils/authHelper";
import {useNavigate} from "react-router-dom";
import {convertImgUrl} from "../../../utils/convertImgUrl";

const RightBlock: FC<{ isAdminPanel: boolean }> = ({isAdminPanel}) => {
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const openModalHandle = useCallback((typeModal: string) => setOpenModal(typeModal),[])
    const user = useStoreAuthLayout((store) => store.user)
    const setUser = useStoreAuthLayout((store) => store.setUser)
    const nav = useNavigate()

    const logout = useCallback( () => {
        removeTokensStorage()
        nav('/')
        setUser(null)
    },[])

    return (
        <div className={styles.rightBlock} style={isAdminPanel ? {width:"100%"} : {}}>
            {!isAdminPanel ?
                <>
                    <img src={KoronaImg} alt="Logo"/>
                    <img src={LogImg} alt="Logo"/>
                </> : <div style={{flex: "1 1 auto"}}>
                    Channel
                </div>
            }
            {user && user?.email ? <div className={styles.adminPanelMenu}>
                <img src={ChestImg} alt="Logo"/>
                <img src={MessageImg} alt="Logo"/>
                {!isAdminPanel && <>
                    <img src={PickImg} alt="Logo"/>
                    <button><img src={ButtonImg} alt="Logo"/> <h4>Get Ad-Free</h4></button>
                </>}
                <img src={user.avatar ? convertImgUrl(user.avatar) : AvatarImg} onClick={logout} alt="Logo"/>
            </div> : <>
                <button onClick={() => openModalHandle('LogIn')} className={styles.buttonLogIn}>Log In</button>
                <button onClick={() => openModalHandle('SignUp')} className={styles.buttonSignUp}>Sign Up</button>
                <CiUser color="white" cursor="pointer"/>
            </>}
        </div>
    );
}

export default memo(RightBlock);