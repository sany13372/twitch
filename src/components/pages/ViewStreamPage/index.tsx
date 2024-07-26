import {FC} from 'react';
import ChatSidebar from "../../UI/ChatSidebar";
import styles from './ViewStreamPage.module.scss'
const ViewStreamPage: FC = () => {
    return (
        <div className={styles.ViewStreamPage}>
            <ChatSidebar/>
        </div>
    );
}

export default ViewStreamPage;