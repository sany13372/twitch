import {FC} from 'react';
import {IMessage} from "../../../../types";
import styles from './ChatSidebarBody.module.scss'
const ChatSidebarBody: FC<{messages:IMessage[]}> = ({messages}) => {
    console.log('mss',messages)
    return (
        <div className={styles.ChatSidebarBody}>
            {messages.length > 0 ? messages.map((message) => <div>
                <h5>time</h5> <h4>{message.userName}</h4>: <p>{message.text}</p>
            </div>) : <h4 className={styles.notMessagesTitle}>Welcome to the chat room!</h4>}
        </div>
    );
}

export default ChatSidebarBody;