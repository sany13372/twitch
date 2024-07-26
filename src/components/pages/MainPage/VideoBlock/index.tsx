import {FC} from 'react';
import {useStoreMainPage} from "../store";
import VideoContent from "../../../UI/VideoContent";
import styles from './VideoBlock.module.scss'

const VideoBlock: FC = () => {
    const liveVideos = useStoreMainPage((store) => store.liveVideos)
    return (
        <div className={styles.videoBlock}>
            {liveVideos.length > 0 ? liveVideos.map((video) =>  <VideoContent key={video.videoName} video={video}/>) : <h2>Результатов не найдено</h2>}
        </div>
    );
}

export default VideoBlock;