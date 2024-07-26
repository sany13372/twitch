import {FC} from 'react';
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

const MainPage: FC = () => {
    const actions = [{title: 'Games', img: GameImg}, {title: 'IRL', img: IrlImg}, {
        title: 'Music',
        img: AirPodsImg
    }, {title: 'Esports', img: WinImg}, {title: 'Creative', img: PaintImg}]
    return (
        <div className={styles.mainPage}>
            <h1>Browse</h1>
            <div className={styles.actionBlock}>
                {actions.map((action) => <ActionBlock key={action.title} title={action.title} img={action.img}/>)}
            </div>
            <SelectCategory/>
            <FilterLine/>
            <VideoBlock/>
        </div>
    );
}

export default MainPage;