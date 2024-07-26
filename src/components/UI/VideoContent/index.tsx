import {FC} from 'react';
import {IVideo} from "../../../types";
import {useStoreLeftSideBar} from "../../LeftSideBar/store";
import styles from './VideoContent.module.scss'
import {useNavigate} from "react-router-dom";

const VideoContent: FC<{ video: IVideo }> = ({video}) => {
    const users = useStoreLeftSideBar((store) => store.streamUsers.concat(store.recommendedChannels))
    const nav = useNavigate()
    return (
        <>
            {users.map((user) => <>
                {user.name === video.userName &&
                    <div>
                        <div className={styles.videoHeader}>
                            <div></div>
                            <span className={styles.views}>{user.usersCount} viewers</span>
                            <img src={video.videoImg} onClick={() => nav(`viewstream/${user.name}`)}  alt="Video"/>
                        </div>
                        <div className={styles.videoContent}>
                            <img src={user.avatar} alt="Logo"/>
                            <div>
                                <h4>{video.videoName}</h4>
                                <h5>{user.name}</h5>
                            </div>
                        </div>
                        <h5 className={styles.gameTitle}>{user.game}</h5>
                        <div className={styles.blockCategory}>
                            {video.category.map((category) => <div className={styles.category}>{category}</div>)}
                        </div>
                    </div>}
            </>)}
        </>
    );
}

export default VideoContent;