import {FC, useEffect, useState} from 'react';
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {VideoServices} from "../../../../services/video.services";
import {IVideo} from "../../../../types";
import HomeVideoCard from "../HomeVideoCard";
import {CategoryStreamServices} from "../../../../services/categoryGame.services";
import {IGameStream} from "../../../../types/category.types";
import {Skeleton} from "@mantine/core";
import styles from './HomeBlock.module.scss'
import CategoryCard from "../../../UI/CategoryCard";
import {useStoreProfilePage} from "../store";

const HomeBlock: FC = () => {
    const userAuth = useStoreAuthLayout((store) => store.user)
    const [videos, setVideos] = useState<IVideo[]>([])
    const [gameCategories, setGameCategories] = useState<IGameStream[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const userProfile = useStoreProfilePage((store) => store.profileUser)

    useEffect(() => {
        if (userProfile) {
            setIsLoading(true)
            VideoServices.getVideos()
                .then(({data}) => {
                    const findVideos = data.data.filter((video) => video.attributes.user.data.id === userProfile.id)
                    setVideos(findVideos)
                    CategoryStreamServices.getCatigories()
                        .then((response) => {
                            const result = []
                            const filterCategories = data.data.map((vid) => vid?.attributes?.gameCategory.toLowerCase()).reduce((a, b) => {
                                if (a.indexOf(b) < 0) a.push(b);
                                return a;
                            }, []);
                            for (const categories of response.data.data) {
                                if (filterCategories.includes(categories?.attributes?.categoryGame.toLowerCase() as never)) {
                                    result.push(categories)
                                }
                            }
                            setGameCategories(result)
                        })
                })
                .finally(() => setIsLoading(false))
        }
    }, [userAuth,userProfile])

    return (
        <div>
            <Skeleton visible={isLoading}>
            <h4>Recent broadcasts</h4>
                <div className={styles.HomeBlock}>
                    {videos.length > 0 ? videos.map((video) => <HomeVideoCard gameCategories={gameCategories} key={video.id}
                                                          video={video}/>) : <h1>Not found streams</h1>}
                </div>
                <h4 className={styles.categoryTitle}>{userProfile.username} recently streamed Categories</h4>
                <div className={styles.categoryLine}>
                    {gameCategories.map((category) => <CategoryCard key={category.id} category={category}/>)}
                </div>
            </Skeleton>
        </div>
    );
}

export default HomeBlock;