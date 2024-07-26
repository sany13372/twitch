import {FC} from 'react';
import {useStoreLeftSideBar} from "../store";
import StreamCart from "../StreamCart";
import styles from './RecommendedChannels.module.scss'

const RecommendedChannels: FC = () => {
    const recommendedChannels = useStoreLeftSideBar((store) => store.recommendedChannels)
    return (
        <div className={styles.block}>
            <h4>Recommended Channels</h4>
            {recommendedChannels.map((user) => <StreamCart user={user}/>)}
            <h5 className={styles.showMore}>Show More</h5>
        </div>
    );
}

export default RecommendedChannels;