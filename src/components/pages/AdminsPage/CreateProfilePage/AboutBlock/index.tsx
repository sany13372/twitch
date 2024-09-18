import {FC, useState} from 'react';
import styles from './AboutBlock.module.scss'

const AboutBlock: FC = () => {
    const [textAbout, setTextAbout] = useState<string>('')
    return (
        <div className={styles.aboutBlock}>
            <h3>About title</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </div>
    );
}

export default AboutBlock;