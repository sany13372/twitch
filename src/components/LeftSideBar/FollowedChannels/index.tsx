import {FC, useEffect, useState} from 'react';
import SortImg from '../../../assets/Sort.svg'
import {useStoreLeftSideBar} from "../store";
import StreamCart from "../StreamCart";
import styles from './FollowedChannels.module.scss'

const FollowedChannels: FC = () => {
    const users = useStoreLeftSideBar((state) => state.streamUsers)
    const setUsers = useStoreLeftSideBar((state) => state.setStreamUsers)
    const [isSort,setIsSort] = useState<boolean>(false)

    useEffect(() => {
        if(users){
            const sortUsers = users.sort((a,b) =>  isSort ? a.usersCount - b.usersCount : b.usersCount - a.usersCount)
            setUsers(sortUsers)
        }

    },[isSort])
    return (
        <div>
            <div className={styles.FollowedChannels}>
                <div>
                    <h4>Followed Channels</h4>
                    <h6>Viewers (High to Low)</h6>
                </div>
                <img src={SortImg} onClick={() => setIsSort(!isSort)} alt="Logo"/>
            </div>
            {users.map((user) => <StreamCart user={user}/>)}
            <h5 className={styles.showMore}>Show More</h5>
        </div>
    );
}

export default FollowedChannels;