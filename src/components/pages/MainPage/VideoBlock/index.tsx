import {FC} from 'react';
import {useStoreMainPage} from "../store";
import VideoContent from "../../../UI/VideoContent";
import styles from './VideoBlock.module.scss'

const VideoBlock: FC = () => {
    const streamsUsers = useStoreMainPage((store) => store.streams)

    return (
        <div className={styles.videoBlock}>
                {streamsUsers.length > 0 ? streamsUsers.map((stream) =>  <VideoContent key={stream.id} video={stream}/>) : <h2>Результатов не найдено</h2>}
        </div>
    );
}

export default VideoBlock;