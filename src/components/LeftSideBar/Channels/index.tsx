import {FC, memo, useEffect, useState} from 'react';
import {useStoreLeftSideBar} from "../store";
import StreamCart from "../StreamCart";
import styles from './Channels.module.scss'
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {IStreamsData} from "../../../types";
import {Skeleton} from "@mantine/core";
import {StreamServices} from "../../../services/stream.services";

const Channels: FC<{ consist: boolean, title: string, spinner:boolean }> = ({title, consist = false, spinner}) => {
    const user = useStoreAuthLayout((store) => store.user)
    const streamUsers = useStoreLeftSideBar((store) => store.streamUsers)
    const [streams, setStreams] = useState<IStreamsData[]>([])
    const [isSort, setIsSort] = useState<boolean>(false)

    // useEffect(() => {
    //     if (users) {
    //         const sortUsers = users.sort((a, b) => isSort ? a.attributes.usersCount - b.attributes.usersCount : b.attributes.usersCount - a.attributes.usersCount)
    //         setUsers(sortUsers)
    //     }
    //
    // }, [isSort])



    useEffect(() => {
        if (streamUsers && user?.id) {
            console.log('FOLL',user)
            if (consist) {
                if (user.follows) {
                    const followUs = new Set(user.follows.map((us) => us.id))
                    const streamsFollows: IStreamsData[] = streamUsers.filter((rect) => !followUs.has(rect.attributes.user.data.id))
                    setStreams(streamsFollows)
                }
            } else {
                if (user.follows) {
                    console.log('WORKK')
                    setStreams(user.follows)
                }
            }
        } else {
            setStreams(streamUsers)
        }
    }, [streamUsers, user])

    return (
        <div className={styles.block}>
            <h4>{title}</h4>
            <Skeleton visible={spinner}>
                {streams.map((user) => <StreamCart consist={consist} key={user.id} user={user}/>)}
            </Skeleton>
            <h5 className={styles.showMore}>Show More</h5>
        </div>
    );
}

export default memo(Channels)