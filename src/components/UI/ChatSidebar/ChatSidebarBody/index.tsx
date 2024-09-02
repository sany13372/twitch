import {FC} from 'react';
import {IMessage} from "../../../../types";
import styles from './ChatSidebarBody.module.scss'
import {useParams} from "react-router-dom";
import {convertDate} from "../../../../utils/convertingDate";
const ChatSidebarBody: FC<{messages:IMessage[]}> = ({messages}) => {
    const streamId = useParams<{id:string}>()
    const filtredMessages = messages.filter((ms) => ms.attributes.streamId === streamId.id)

    return (
        <div className={styles.ChatSidebarBody}>
            {filtredMessages.length > 0 ? filtredMessages.map((message) => <div key={message.id}>
                <h5>{convertDate(message.attributes?.createdAt)}</h5> <h4>{message.attributes.user}</h4>: <p>{message.attributes.message}</p>
            </div>) : <h4 className={styles.notMessagesTitle}>Welcome to the chat room!</h4>}
        </div>
    );
}

export default ChatSidebarBody;