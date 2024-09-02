import {FC} from 'react';
import {IStreamsData} from "../../../types";
import styles from './VideoContent.module.scss'
import {useNavigate} from "react-router-dom";

const VideoContent: FC<{ video: IStreamsData }> = ({video}) => {
    const nav = useNavigate()
    return (
        <div>
            <div className={styles.videoHeader}>
                <div></div>
                <span className={styles.views}>{video?.attributes.usersCount} viewers</span>
                <img src={video?.attributes.videoImg}
                     onClick={() => nav(`viewstream/${video.id}`)} alt="Video"/>
            </div>
            <div className={styles.videoContent}>
                <img src={video.attributes?.user?.data?.attributes?.avatar} alt="Logo"/>
                <div>
                    <h4>{video.attributes.videoName}</h4>
                    <h5>{video.attributes?.user?.data?.attributes?.username}</h5>
                </div>
            </div>
            <h5 className={styles.gameTitle}>{video.attributes.gameStream?.attributes?.categoryGame}</h5>
            <div className={styles.blockCategory}>
                {video.attributes?.categoryGame && video.attributes?.categoryGame.split(',').map((category) => <div className={styles.category}>{category}</div>)}
            </div>
        </div>
    );
}

export default VideoContent;