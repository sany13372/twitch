import {FC, useEffect, useState} from 'react';
import styles from './AboutBlock.module.scss'
import {useStoreAuthLayout} from "../../../../layouts/layoutStore";
import {IUpdateProfileDto} from "../index";

const AboutBlock: FC<{handleUpdateProfile:(dto:IUpdateProfileDto) => void}> = ({handleUpdateProfile}) => {
    const userAuth = useStoreAuthLayout((store) => store.user)
    const [aboutTitle, setAboutTitle] = useState<string>(userAuth?.profileInfo?.aboutTitle || '')

    useEffect(() => {
        setAboutTitle(userAuth?.profileInfo?.aboutTitle || '')
    },[userAuth])
    return (
        <div className={styles.aboutBlock}>
            <h3>About title</h3>
            <div>
                <textarea value={aboutTitle} onChange={(e) => setAboutTitle(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => handleUpdateProfile({aboutTitle})}>Save</button>
            </div>
        </div>
    );
}

export default AboutBlock;