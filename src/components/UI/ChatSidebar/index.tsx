import {FC, memo, useEffect, useState} from 'react';
import ExitImg from './assets/Exit.svg'
import styles from './ChatSidebar.module.scss'
import { FiUsers } from "react-icons/fi";
import {socket} from "../../../socket";
import {IMessage, IStreamsData} from "../../../types";
import ChatSidebarBody from "./ChatSidebarBody";
import {OpenModalEnum, useStoreAuthLayout} from "../../layouts/layoutStore";
import {MessagesServices} from "../../../services/messages.services";


const ChatSidebar: FC<{ user: IStreamsData }> = memo(({user}) => {
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<IMessage[]>([])
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const handelSendMessage = () => {
        if (userAuth?.id){
            if (text !== '') {
                socket.emit('sendMessage', {
                    text: text,
                    nickName: userAuth.username,
                    userId: userAuth.id,
                    streamId: user.id,
                })
                setText('')
            }
        } else {
            setOpenModal(OpenModalEnum.LogIn)
        }
    }
    useEffect(() => {
        socket.on("message", async (data, error) => {//Listening for a message connection
        MessagesServices.getMessages()
            .then(({data}) => {
                setMessages(data.data)
            })
            .catch((e) => console.log(e.message));
        });

    }, [socket])

    useEffect(() => {
        MessagesServices.getMessages()
            .then(({data}) => {
                setMessages(data.data)
            })
            .catch((e) => console.log(e.message));
    },[userAuth])

    return (
        <div className={styles.chatSidebar}>
            <div className={styles.chatSidebarHeader}>
                <img src={ExitImg} alt="Logo"/>
                <h4>STREAM CHAT</h4>
                <FiUsers />
            </div>
            <ChatSidebarBody messages={messages}/>
            <div>
                <input value={text} placeholder="Send a message" onChange={(e) => setText(e.target.value)} type="text"/>
                <div>
                    <button onClick={() => handelSendMessage()}>Chat</button>
                </div>
            </div>
        </div>
    );
})

export default ChatSidebar;