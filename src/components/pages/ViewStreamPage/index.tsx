import {FC, useEffect, useState} from 'react';
import ChatSidebar from "../../UI/ChatSidebar";
import styles from './ViewStreamPage.module.scss'
import {useParams} from "react-router-dom";
import {StreamServices} from "../../../services/stream.services";
import {IStreamsData} from "../../../types";
import {Skeleton} from "@mantine/core";
import ViewStreamBlock from "./ViewStreamBlock";

const ViewStreamPage: FC = () => {
    const [user, setUser] = useState<IStreamsData>({} as IStreamsData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const idUser = useParams<{ id: string }>()
    useEffect(() => {
        if (idUser.id) {
            setIsLoading(true)
            StreamServices.getStreamer(idUser.id)
                .then(({data}) => {
                    setUser(data.data)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [idUser])

    return (
        <div className={styles.ViewStreamPage}>
                <Skeleton visible={isLoading}>
                    {user.attributes ? <ViewStreamBlock user={user}/> : <h4>Пользователь не найден</h4>}
                </Skeleton>
                <ChatSidebar user={user}/>
        </div>
    );
}

export default ViewStreamPage;