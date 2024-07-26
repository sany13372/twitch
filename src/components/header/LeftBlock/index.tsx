import {FC, useState} from 'react';
import TwitchLogoImg from '../assets/Group.svg'
import styles from './LeftBlock.module.scss'
import cn from 'clsx'
import OptionsImg from '../assets/Options.svg'
import {useNavigate} from "react-router-dom";

export const selectSectionType = {
    following: 'Following',
    browse: 'Browse'
}
const LeftBlock: FC = () => {
    const [selectSection, setSelectSection] = useState<typeof selectSectionType | string>('')
    const navigate = useNavigate()
    return (
        <div className={styles.leftBlock}>
            <img src={TwitchLogoImg} onClick={() => navigate('/',{replace:true})} alt="Logo"/>
            <h3 className={cn({[styles.active]: selectSection === selectSectionType.following})}
                onClick={() => setSelectSection(selectSectionType.following)}>{selectSectionType.following}</h3>
            <h3 className={cn({[styles.active]: selectSection === selectSectionType.browse})}
                onClick={() => setSelectSection(selectSectionType.browse)}>{selectSectionType.browse}</h3>
            <img src={OptionsImg} alt="Logo"/>
        </div>
    );
}

export default LeftBlock;