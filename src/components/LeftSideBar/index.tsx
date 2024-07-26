import {FC} from 'react';
import ExitImg from '../../assets/Vector.svg'
import FollowedChannels from "./FollowedChannels";
import styles from './LeftSideBar.module.scss'
import RecommendedChannels from "./RecommendedChannels";

const LeftSideBar: FC = () => {
    return (
        <div className={styles.LeftSideBar}>
            <div className={styles.LeftSideBarHeader}>
                <h3>For You</h3>
                <img src={ExitImg} alt="Logo"/>
            </div>
            <FollowedChannels/>
            <RecommendedChannels/>
        </div>
    );
}

export default LeftSideBar;