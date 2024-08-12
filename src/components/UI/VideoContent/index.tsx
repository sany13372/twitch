import {FC} from 'react';
import {IVideoLive} from "../../../types";
import styles from './VideoContent.module.scss'
import {useNavigate} from "react-router-dom";
import {useStoreMainPage} from "../../pages/MainPage/store";
const VideoContent: FC<{ video: IVideoLive }> = ({video: {attributes}}) => {
    const nav = useNavigate()
    const gameCategories = useStoreMainPage((store) => store.gameCategories)
    const {attributes:streamerAttributes,id}= attributes.streamer.data
    const gameStreamer = gameCategories.filter((game) => game.attributes.streamers?.data.find((streamer) => streamer.id === id))
    return (
        <div>
            <div className={styles.videoHeader}>
                <div></div>
                <span className={styles.views}>{streamerAttributes?.usersCount} viewers</span>
                <img src={attributes.videoImg}
                     onClick={() => nav(`viewstream/${id}`)} alt="Video"/>
            </div>
            <div className={styles.videoContent}>
                <img src={streamerAttributes?.avatar} alt="Logo"/>
                <div>
                    <h4>{attributes.videoName}</h4>
                    <h5>{streamerAttributes?.nickname}</h5>
                </div>
            </div>
            {gameStreamer && gameStreamer.map((game) => <h5 className={styles.gameTitle}>{game.attributes.categoryGame}</h5>)}
            <div className={styles.blockCategory}>
                <div className={styles.category}>{attributes.category}</div>
            </div>
        </div>
    );
}

export default VideoContent;