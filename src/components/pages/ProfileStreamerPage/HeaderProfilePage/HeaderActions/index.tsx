import {FC, useMemo} from 'react';
import styles from "../HeaderProfilePage.module.scss";
import {FaHeart} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import SubscribeButton from "../../../../UI/SubscribeButton";
import ImgOptions from "../../../../../assets/Options.svg";
import {toggleFollow} from "../../../../../utils/toggleFollow";
import {useStoreAuthLayout} from "../../../../layouts/layoutStore";
import {useStoreProfilePage} from "../../store";

const HeaderActions:FC = () => {
    const userProfile = useStoreProfilePage((store) => store.profileUser)
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setUserAuth = useStoreAuthLayout((store) => store.setUser)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const isFollow = useMemo(() => userAuth ? Boolean(userAuth?.follows?.find((us) => us.id === userProfile?.id)?.id) : false, [userAuth, userProfile])
    const handleFollow = () => toggleFollow(userAuth, setOpenModal, isFollow, userProfile, setUserAuth)
    return (
     <div>
         <div className={styles.buttonAction} onClick={handleFollow}><FaHeart color={isFollow ? 'red' : 'white'}/>
         </div>
         <div className={styles.buttonAction}><IoIosNotifications/></div>
         <SubscribeButton/>
         <img src={ImgOptions} alt="Logo"/>
     </div>
 );
 }

export default HeaderActions;