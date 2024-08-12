import {FC, useEffect, useState} from 'react';
import {useStoreMainPage} from "../store";
import VideoContent from "../../../UI/VideoContent";
import styles from './VideoBlock.module.scss'
import {Skeleton} from "@mantine/core";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {VideoServices} from "../../../../services/video.services";

const VideoBlock: FC = () => {
    const liveVideos = useStoreMainPage((store) => store.liveVideos)
    const setLiveVideos = useStoreMainPage((store) => store.setLiveVideos)
    const userAuth = useStoreAuthLayout((store) => store.user)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        if (userAuth){
            setIsLoading(true)
            VideoServices.getVideos()
                .then(({data}) => {
                    setLiveVideos(data.data)
                })
                .finally(() => {setIsLoading(false)})
        }
    },[userAuth])

    return (
        <div className={styles.videoBlock}>
            <Skeleton visible={isLoading} >
                {liveVideos.length > 0 ? liveVideos.map((video) =>  <VideoContent key={video.id} video={video}/>) : <h2>Результатов не найдено</h2>}
            </Skeleton>
        </div>
    );
}

export default VideoBlock;