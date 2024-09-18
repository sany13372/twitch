import {FC, useMemo} from 'react';
import {useStoreProfilePage} from "../store";
import {FaHeart} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import ImgOptions from '../../../../assets/Options.svg'
import {toggleFollow} from "../../../../utils/toggleFollow";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import SubscribeButton from "../../../UI/SubscribeButton";
import styles from './HeaderProfilePage.module.scss'
import {convertImgUrl} from "../../../../utils/convertImgUrl";
const HeaderProfilePage: FC = () => {
    const userProfile = useStoreProfilePage((store) => store.profileUser)
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setUserAuth = useStoreAuthLayout((store) => store.setUser)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const isFollow = useMemo(() => userAuth ? Boolean(userAuth?.follows?.find((us) => us.id === userProfile?.id)?.id) : false, [userAuth, userProfile])
    const handleFollow = () => toggleFollow(userAuth, setOpenModal, isFollow, userProfile, setUserAuth)

    return (
        <div className={styles.headerProfile}>
            <div>
                <img src={convertImgUrl(userProfile.avatar)} alt="Logo"/>
                <div>
                    <h4>{userProfile.username}</h4>
                    <h5>{userProfile?.followers?.length} followers</h5>
                </div>
            </div>
            <div>
                <div className={styles.buttonAction} onClick={handleFollow}><FaHeart color={isFollow ? 'red' : 'white'}/>
                </div>
                <div className={styles.buttonAction}><IoIosNotifications/></div>
                <SubscribeButton/>
                <img src={ImgOptions} alt="Logo"/>
            </div>
        </div>
    );
};
export default HeaderProfilePage;


