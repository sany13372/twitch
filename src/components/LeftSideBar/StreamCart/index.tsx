import {FC, memo} from 'react';
import {IStreamsData} from "../../../types";
import styles from './StreamCart.module.scss'
import {useNavigate} from "react-router-dom";
import {useStoreLeftSideBar} from "../store";
import {convertImgUrl} from "../../../utils/convertImgUrl";

const StreamCart: FC<{ user: IStreamsData,consist:boolean }> = ({user,consist}) => {
    const nav = useNavigate()
    const streamUsers = useStoreLeftSideBar((store) => store.streamUsers)
    const findStream = streamUsers.find((us) => {
        if (consist){
          return   us?.attributes?.user?.data?.id ===  user?.attributes?.user?.data?.id
        } else {
            return  us?.attributes?.user?.data?.id === user.id
        }
    })
    if (!findStream) return null
    return (
        <div className={styles.StreamCart}
             onClick={() => nav(`viewstream/${findStream.id}`)}
        >
            <img src={convertImgUrl(findStream.attributes.user.data.attributes.avatar)} alt="Logo"/>
            <div>
                <h3>{findStream.attributes.user.data.attributes.username}</h3>
                {findStream.attributes.usersCount   && <h4>{findStream.attributes?.gameStream?.data.attributes?.categoryGame}</h4>}
            </div>
            {findStream.attributes?.usersCount   ?
                <div className={styles.streamLive}>
                    <div></div>
                    <h4>{findStream.attributes.usersCount}</h4>
                </div>
                : <h4>Offline</h4>}
        </div>
    );
}

export default memo(StreamCart);