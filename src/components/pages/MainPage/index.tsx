import {FC, useEffect, useState} from 'react';
import styles from './MainPage.module.scss'
import AirPodsImg from './assets/AirPods.png'
import GameImg from './assets/Game.png'
import IrlImg from './assets/Microphone.png'
import WinImg from './assets/Win.png'
import PaintImg from './assets/Paint.png'
import ActionBlock from "./ActionBlock";
import SelectCategory from "./SelectCategory";
import FilterLine from "./FilterLine";
import VideoBlock from "./VideoBlock";
import {useStoreMainPage} from "./store";
import {SelectCategoryStreamEnum} from "../../../types";
import CategoryBlock from "./CategoryBlock";
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {CategoryStreamServices} from "../../../services/categoryGame.services";
import {Skeleton} from "@mantine/core";

const MainPage: FC = () => {
    const actions = [{title: 'Games', img: GameImg}, {title: 'IRL', img: IrlImg}, {
        title: 'Music',
        img: AirPodsImg
    }, {title: 'Esports', img: WinImg}, {title: 'Creative', img: PaintImg}]
    const selectCategory = useStoreMainPage((store) => store.selectCategoryStream)
    const setGameCategories = useStoreMainPage((store) => store.setGameCategories)
    const userAuth = useStoreAuthLayout((store) => store.user)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        if (userAuth){
            setIsLoading(true)
            CategoryStreamServices.getCatigories()
                .then(({data}) => {
                    setGameCategories(data.data)
                })
                .finally(() => {setIsLoading(false)})
        }
    },[userAuth])

    return (
        <div className={styles.mainPage}>
            <h1>Browse</h1>
            <div className={styles.actionBlock}>
                {actions.map((action) => <ActionBlock key={action.title} title={action.title} img={action.img}/>)}
            </div>
            <SelectCategory/>
            <FilterLine/>
            {selectCategory === SelectCategoryStreamEnum.LiveChannels ? <VideoBlock/> : <Skeleton visible={isLoading}><CategoryBlock/></Skeleton> }
        </div>
    );
}

export default MainPage;