import {FC, useMemo} from 'react';
import {IVideo} from "../../../../types";
import styles from './HomeVideoCard.module.scss'
import {convertImgUrl} from "../../../../utils/convertImgUrl";
import cn from 'clsx'
import {IGameStream} from "../../../../types/category.types";

const HomeVideoCard: FC<{video:IVideo,gameCategories:IGameStream[]}> = ({video,gameCategories}) => {
    const data = Number(new Date(new Date().toUTCString()))
    const dataConvert = Number(new Date(new Date(video.attributes.createdAt).toUTCString()))
    const dataAgo =  Math.abs(Math.ceil((parseInt(String((dataConvert-data)/1000))/60)/60))
    const findGame = useMemo(() => gameCategories?.find((gm) => gm.attributes.categoryGame.toLowerCase() === video.attributes.gameCategory.toLowerCase()),[gameCategories])

    return (
        <div>
            <div className={styles.videoHeader}>
                <span className={cn(styles.timeTitle,styles.blockInfo)}>{video?.attributes.videoTime}</span>
                <span className={cn(styles.views,styles.blockInfo)}>{video?.attributes.views} views</span>
                <span className={cn(styles.createData,styles.blockInfo)}>{dataAgo} hours ago</span>
                <img src={convertImgUrl(video.attributes.videoImg)}
                     alt="Video"/>
            </div>
            <div className={styles.videoContent}>
                <img src={convertImgUrl(findGame ? findGame?.attributes?.categoryImg : '')} alt="Logo"/>
                <div>
                    <h4>{video.attributes.videoName}</h4>
                    <h5>{video.attributes?.user?.data?.attributes?.username}</h5>
            <h5 className={styles.gameTitle}>{video.attributes.gameCategory}</h5>
                </div>
            </div>
        </div>
    );
}

export default HomeVideoCard;