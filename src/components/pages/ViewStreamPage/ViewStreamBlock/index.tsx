import {FC} from 'react';
import {IStreamsData} from "../../../../types";
import ActionBlock from "../ActionBlock/ActionBlock";
import styles from './ViewStreamBlock.module.scss'
import {convertImgUrl} from "../../../../utils/convertImgUrl";
import AboutBlock from "../AboutBlock";

const ViewStreamBlock: FC<{user:IStreamsData}> = ({user}) => {
    return (
        <div className={styles.block}>
            <img src={convertImgUrl(user.attributes.videoImg)} alt="Logo"/>
            <div>
                <ActionBlock user={user}/>
                <AboutBlock user={user}/>
            </div>
        </div>
    );
}

export default ViewStreamBlock;