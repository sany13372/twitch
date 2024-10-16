import {FC, memo, useEffect, useState} from 'react';
import styles from './ChatSidebar.module.scss'
import { FiUsers } from "react-icons/fi";
import {socket} from "../../../socket";
import {IMessage, IStreamsData} from "../../../types";
import ChatSidebarBody from "./ChatSidebarBody";
import {OpenModalEnum, useStoreAuthLayout} from "../../layouts/layoutStore";
import {MessagesServices} from "../../../services/messages.services";
import {Burger} from "@mantine/core";
import cn from 'clsx'


const ChatSidebar: FC<{ user: IStreamsData }> = memo(({user}) => {
    const [text, setText] = useState<string>('')
    const [messages, setMessages] = useState<IMessage[]>([])
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const [isOpen,setIsOpen] = useState<boolean>(true)

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
        socket.on("message", async () => {//Listening for a message connection
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
        <div className={cn(styles.chatSidebar,{[styles.close]:!isOpen,[styles.open]:isOpen})}>
            <div className={styles.chatSidebarHeader}>
                <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" />
                <h4>STREAM CHAT</h4>
                <FiUsers />
            </div>
            <ChatSidebarBody messages={messages}/>
            <div>
                <input value={text} placeholder="Send a message" onChange={(e) => setText(e.target.value)} type="text"/>
                <div className={styles.actionChat}>
                    <button onClick={() => handelSendMessage()}>Chat</button>
                </div>
            </div>
        </div>
    );
})

export default memo(ChatSidebar);