import {FC, memo, useEffect, useState} from 'react';
import ExitImg from '../../assets/Vector.svg'
import styles from './LeftSideBar.module.scss'
import Channels from "./Channels";
import {StreamServices} from "../../services/stream.services";
import {useStoreAuthLayout} from "../layouts/layoutStore";
import {useStoreLeftSideBar} from "./store";
import {useLocation} from "react-router-dom";

const LeftSideBar: FC = () => {
    const userAuth = useStoreAuthLayout((state) => state.user)
    const setUsers = useStoreLeftSideBar((state) => state.setStreamUsers)
    const [spinner, setSpinner] = useState<boolean>(false)
    const {pathname} = useLocation()

    useEffect(() => {
            setSpinner(true)
            StreamServices.getStreamers().then(({data}) => {
                setUsers(data.data)
            }).finally(() => {
                setSpinner(false)
            })
    }, [userAuth,pathname])

    return (
        <div className={styles.LeftSideBar}>
            <div className={styles.LeftSideBarHeader}>
                <h3>For You</h3>
                <img src={ExitImg} alt="Logo"/>
            </div>
            {userAuth?.id && userAuth?.follows.length > 0 && <Channels title="Followed Channels" spinner={spinner} consist={false}/>}
            <Channels title="Recommended Channels" spinner={spinner} consist={true}/>
        </div>
    );
}

export default memo(LeftSideBar);