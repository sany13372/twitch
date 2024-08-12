import {FC} from 'react';
import {IStreamUser} from "../../../types";
import styles from './StreamCart.module.scss'
import {useNavigate} from "react-router-dom";

const StreamCart: FC<{ user: IStreamUser }> = ({user:{attributes,id}}) => {
    const nav = useNavigate()
    return (
        <div className={styles.StreamCart}
             onClick={() => nav(`viewstream/${id}`)}
        >
            <img src={`http://localhost:5173/${attributes.avatar}`} alt="Logo"/>
            <div>
                <h3>{attributes.nickname}</h3>
                {attributes.live && <h4>{attributes.gameStream?.data.attributes.categoryGame}</h4>}
            </div>
            {attributes.live ?
                <div className={styles.streamLive}>
                    <div></div>
                    <h4>{attributes.usersCount}</h4>
                </div>
                : <h4>Offline</h4>}
        </div>
    );
}

export default StreamCart;