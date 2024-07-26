import {FC} from 'react';
import {IStreamUser} from "../../../types";
import styles from './StreamCart.module.scss'
const StreamCart: FC<{ user: IStreamUser }> = ({user}) => {

    return (
        <div className={styles.StreamCart}>
            <img src={user.avatar} alt="Logo"/>
            <div>
                <h3>{user.name}</h3>
                {user.live &&  <h4>{user.game}</h4> }
            </div>
            {user.live ?
                <div className={styles.streamLive}>
                    <div></div>
                    <h4>{user.usersCount}</h4>
                </div>
            : <h4>Offline</h4>}
        </div>
    );
}

export default StreamCart;