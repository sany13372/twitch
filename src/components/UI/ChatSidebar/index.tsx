import {FC, useEffect, useState} from 'react';
import ExitImg from './assets/Exit.svg'
import styles from './ChatSidebar.module.scss'
import {socket} from "../../../socket";
import {IMessage} from "../../../types";
import ChatSidebarBody from "./ChatSidebarBody";
import { TbUsers } from "react-icons/tb";


const ChatSidebar: FC = () => {
    const [text,setText] = useState<string>('')
    const [messages,setMessages] = useState<IMessage[]>([])

    const handelSendMessage = () => {
        if (text !== ''){
            socket.emit('message',{text:text,id:socket.id,socketId:socket.id})
            setText('')
        }
    }
    useEffect(() => {
        socket.on('response',(data) => {
            setMessages((prev) => [...prev,data])
        })
    },[socket])

    return (
        <div className={styles.chatSidebar}>
            <div className={styles.chatSidebarHeader}>
                <img src={ExitImg} alt="Logo"/>
                <h4>STREAM CHAT</h4>
                <TbUsers color="white"/>
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
}

export default ChatSidebar;