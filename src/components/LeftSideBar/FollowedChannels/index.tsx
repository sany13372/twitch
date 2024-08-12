import {FC, useEffect, useState} from 'react';
import SortImg from '../../../assets/Sort.svg'
import {useStoreLeftSideBar} from "../store";
import StreamCart from "../StreamCart";
import styles from './FollowedChannels.module.scss'
import {StreamServices} from "../../../services/stream.services";
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {Skeleton} from "@mantine/core";

const FollowedChannels: FC = () => {
    const users = useStoreLeftSideBar((state) => state.streamUsers)
    const setUsers = useStoreLeftSideBar((state) => state.setStreamUsers)
    const userAuth = useStoreAuthLayout((state) => state.user)
    const [isSort, setIsSort] = useState<boolean>(false)
    const [spinner, setSpinner] = useState<boolean>(false)

    useEffect(() => {
        if (users) {
            const sortUsers = users.sort((a, b) => isSort ? a.attributes.usersCount - b.attributes.usersCount : b.attributes.usersCount - a.attributes.usersCount)
            setUsers(sortUsers)
        }

    }, [isSort])

    useEffect(() => {
        if (userAuth) {
            setSpinner(true)
            StreamServices.getStreamers().then(({data}) => {
                setUsers(data.data)
            }).finally(() => {
                setSpinner(false)
            })
        }
    }, [userAuth])

    return (
        <div>
            <div className={styles.FollowedChannels}>
                <div>
                    <h4>Followed Channels</h4>
                    <h6>Viewers (High to Low)</h6>
                </div>
                <img src={SortImg} onClick={() => setIsSort(!isSort)} alt="Logo"/>
            </div>
            <Skeleton visible={spinner}>
                {users.length && users.map((user) => <StreamCart user={user}/>)}
            </Skeleton>
            <h5 className={styles.showMore}>Show More</h5>
        </div>
    );
}

export default FollowedChannels;