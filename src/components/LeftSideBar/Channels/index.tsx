import {FC, memo, useEffect, useMemo, useState} from 'react';
import {useStoreLeftSideBar} from "../store";
import StreamCart from "../StreamCart";
import styles from './Channels.module.scss'
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {IStreamsData} from "../../../types";
import {Skeleton} from "@mantine/core";
import SortImg from '../../../assets/Sort.svg'

const Channels: FC<{ consist: boolean, title: string, spinner: boolean }> = ({title, consist = false, spinner}) => {
    const user = useStoreAuthLayout((store) => store.user)
    const streamUsers = useStoreLeftSideBar((store) => store.streamUsers)
    const [streams, setStreams] = useState<IStreamsData[]>([])
    const [isSort, setIsSort] = useState<boolean>(false)
    const followUs =  useMemo(() => new Set(user ? user?.follows?.map((us) => us.id) : []),[user])

    useEffect(() => {
        if (user?.follows && !consist) {
            //todo:Доработать сортировку
            const streamsFollows: IStreamsData[] = streamUsers.filter((rect) => followUs.has(rect.attributes.user.data.id))
            const sortUsers = streamsFollows.sort((a, b) => isSort ? a.attributes.usersCount - b.attributes.usersCount : b.attributes.usersCount - a.attributes.usersCount)
            setStreams(sortUsers)
        }

    }, [isSort,streamUsers])


    useEffect(() => {
        if (streamUsers && user?.id) {
            if (consist) {
                if (user.follows) {
                    const streamsFollows: IStreamsData[] = streamUsers.filter((rect) => !followUs.has(rect.attributes.user.data.id))
                    setStreams(streamsFollows)
                }
            } else {
                if (user.follows) {
                    setStreams(user.follows)
                }
            }
        } else {
            setStreams(streamUsers)
        }
    }, [streamUsers, user])

    if (streams.length === 0) return null
    return (
        <div className={styles.block}>
            <div className={styles.sortLine}>
                <h4>{title}</h4>
                {/*{user?.follows && user?.follows.length > 0 && !consist  && <img src={SortImg} onClick={() => setIsSort(!isSort)} alt="Logo"/>}*/}
            </div>
            <Skeleton visible={spinner}>
                {streams.map((user) => <StreamCart consist={consist} key={user.id} user={user}/>)}
            </Skeleton>
            <h5 className={styles.showMore}>Show More</h5>
        </div>
    );
}

export default memo(Channels)