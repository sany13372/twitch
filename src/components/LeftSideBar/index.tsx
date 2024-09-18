import {FC, memo, useEffect, useState} from 'react';
import styles from './LeftSideBar.module.scss'
import Channels from "./Channels";
import {StreamServices} from "../../services/stream.services";
import {useStoreAuthLayout} from "../layouts/layoutStore";
import {useStoreLeftSideBar} from "./store";
import {useLocation} from "react-router-dom";
import {Burger} from '@mantine/core';
import cn from 'clsx'


const LeftSideBar: FC = () => {
    const userAuth = useStoreAuthLayout((state) => state.user)
    const setUsers = useStoreLeftSideBar((state) => state.setStreamUsers)
    const [spinner, setSpinner] = useState<boolean>(false)
    const {pathname} = useLocation()
    const [isOpen, setIsOpen] = useState<boolean>(true)

    useEffect(() => {
        setSpinner(true)
        StreamServices.getStreamers().then(({data}) => {
            setUsers(data.data)
        }).finally(() => {
            setSpinner(false)
        })
    }, [userAuth, pathname])

    return (
        <div className={cn(styles.LeftSideBar, {[styles.close]: !isOpen, [styles.open]: isOpen})}>
            <div className={styles.LeftSideBarHeader}>
                <h3>For You</h3>
                <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation"/>
            </div>
            {userAuth?.id && userAuth?.follows.length > 0 &&
                <Channels title="Followed Channels" spinner={spinner} consist={false}/>}
            <Channels title="Recommended Channels" spinner={spinner} consist={true}/>
        </div>
    );
}

export default memo(LeftSideBar);