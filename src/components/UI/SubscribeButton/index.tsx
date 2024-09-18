import {FC} from 'react';
import {FaRegStar} from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";
import styles from './SubscribeButton.module.scss'
const SubscribeButton: FC = () => {
    return (
        <div className={styles.subscribe}>
            <FaRegStar/>
            <h4>Subscribe</h4>
            <IoIosArrowDown/>
        </div>
    );
}

export default SubscribeButton;