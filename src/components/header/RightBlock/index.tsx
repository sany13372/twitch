import {FC} from 'react';
import styles from './RightBlock.module.scss'
import KoronaImg from '../assets/Korona.svg'
import ChestImg from '../assets/Chest.svg'
import MessageImg from '../assets/Message.svg'
import LogImg from '../assets/Log.svg'
import ButtonImg from '../assets/Button.svg'
import AvatarImg from '../assets/Avatar.svg'
import PickImg from '../assets/Pick.svg'

const RightBlock: FC = () => {
    return (
        <div className={styles.rightBlock}>
            <img src={KoronaImg} alt="Logo"/>
            <img src={ChestImg} alt="Logo"/>
            <img src={MessageImg} alt="Logo"/>
            <img src={PickImg} alt="Logo"/>
            <button><img src={ButtonImg} alt="Logo"/> <h4>Get Ad-Free</h4></button>
            <img src={LogImg} alt="Logo"/>
            <img src={AvatarImg} alt="Logo"/>
        </div>
    );
}

export default RightBlock;