import {FC, useEffect, useState} from 'react';
import ChatSidebar from "../../UI/ChatSidebar";
import styles from './ViewStreamPage.module.scss'
import {useParams} from "react-router-dom";
import {StreamServices} from "../../../services/stream.services";
import {IStreamUser} from "../../../types";
import {Skeleton} from "@mantine/core";

const ViewStreamPage: FC = () => {
    const [user, setUser] = useState<IStreamUser>({} as IStreamUser)
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
            <div>
                <Skeleton visible={isLoading}>
                    {user.attributes ? <div>
                        <img src={user.attributes.videoLive.data.attributes.videoImg} alt="Logo"/>
                    </div> : <h4>Пользователь не найден</h4>}
                </Skeleton>
                <ChatSidebar user={user}/>
            </div>
        </div>
    );
}

export default ViewStreamPage;