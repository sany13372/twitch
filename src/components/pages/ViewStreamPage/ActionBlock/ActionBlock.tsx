import {FC, memo, useMemo} from 'react';
import {IStreamsData} from "../../../../types";
import {FaHeart, FaRegUser, FaShare, FaSmileWink} from "react-icons/fa";
import OptionsImg from '../../../../assets/Options.svg'
import styles from './ActionBlock.module.scss'
import {convertImgUrl} from "../../../../utils/convertImgUrl";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {toggleFollow} from "../../../../utils/toggleFollow";
import SubscribeButton from "../../../UI/SubscribeButton";
import {useNavigate} from "react-router-dom";

const ActionBlock: FC<{ user: IStreamsData }> = ({user}) => {
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setUserAuth = useStoreAuthLayout((store) => store.setUser)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const findUser = useMemo(() => userAuth ? userAuth?.follows?.find((us) => us.id === user?.attributes?.user.data.id) : false, [userAuth, user])
    const nav = useNavigate()
    const handleFollow = () => toggleFollow(userAuth,setOpenModal,Boolean(findUser),user,setUserAuth)
    return (
        <div className={styles.actionBlock}>
            <div>
                <img className={styles.imgAvatar} src={convertImgUrl(user.attributes.user.data.attributes.avatar)}
                     alt="Logo"
                     onClick={() => nav(`/profile-streamer/${user.attributes.user.data.id}`)}
                />
                <div>
                    <h3>{user.attributes.user.data.attributes.username}</h3>
                    <h2>{user.attributes.videoName}</h2>
                    <h4>{user.attributes.gameStream.data.attributes.categoryGame}</h4>
                </div>
            </div>
            <div>
                <div>
                    <div className={styles.reaction}><FaSmileWink/> <span>React</span></div>
                    <div className={styles.follow} onClick={handleFollow}><FaHeart/> {findUser ? 'UnFollow' : 'Follow'}
                    </div>
                    <SubscribeButton/>
                </div>
                <div className={styles.infoStream}>
                    <FaRegUser color="red"/>
                    <h4>{user.attributes.usersCount}</h4>
                    <h5>2:17:56</h5>
                    <FaShare cursor="pointer"/>
                    <img src={OptionsImg} alt="Logo"/>
                </div>
            </div>
        </div>
    );
}

export default memo(ActionBlock);