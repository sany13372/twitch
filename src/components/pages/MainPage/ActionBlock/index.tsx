import {FC, memo} from 'react';
import styles from './ActionBlock.module.scss'
interface IActionBlock {
    title:string
    img:string
}
const ActionBlock: FC<IActionBlock> = ({title,img}) => {
    return (
        <div className={styles.ActionBlock}>
            <h3>{title}</h3>
            <img src={img} alt="Logo"/>
        </div>
    );
}

export default memo(ActionBlock);