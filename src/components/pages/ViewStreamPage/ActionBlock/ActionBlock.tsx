import {FC, useMemo} from 'react';
import {IStreamsData} from "../../../../types";
import {FaHeart, FaRegStar, FaRegUser, FaShare, FaSmileWink} from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";
import OptionsImg from '../../../../assets/Options.svg'
import styles from './ActionBlock.module.scss'
import {convertImgUrl} from "../../../../utils/convertImgUrl";
import {OpenModalEnum, useStoreAuthLayout} from "../../../layouts/layoutStore";
import {UserServices} from "../../../../services/user.services";

const ActionBlock: FC<{ user: IStreamsData }> = ({user}) => {
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setUserAuth = useStoreAuthLayout((store) => store.setUser)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const isFollow = useMemo(() => userAuth ? userAuth?.follows?.find((us) => us.id === user?.attributes?.user.data.id)?.id : false, [userAuth, user])
    const toggleFollow = () => {
        if (userAuth?.id) {
            const userUpdateDto = {
                follows: {
                    connect: isFollow ? [] : [{id: user?.attributes?.user.data.id, position: {end: true}}],
                    disconnect: isFollow ? [{id: user?.attributes?.user.data.id}] : []
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
    return (
        <div className={styles.actionBlock}>
            <div>
                <img className={styles.imgAvatar} src={convertImgUrl(user.attributes.user.data.attributes.avatar)}
                     alt="Logo"/>
                <div>
                    <h3>{user.attributes.user.data.attributes.username}</h3>
                    <h2>{user.attributes.videoName}</h2>
                    <h4>{user.attributes.gameStream.data.attributes.categoryGame}</h4>
                </div>
            </div>
            <div>
                <div>
                    <div className={styles.reaction}><FaSmileWink/> <span>React</span></div>
                    <div className={styles.follow} onClick={toggleFollow}><FaHeart/> {isFollow ? 'UnFollow' : 'Follow'}
                    </div>
                    <div className={styles.subscribe}>
                        <FaRegStar/>
                        <h4>Subscribe</h4>
                        <IoIosArrowDown/>
                    </div>
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

export default ActionBlock;