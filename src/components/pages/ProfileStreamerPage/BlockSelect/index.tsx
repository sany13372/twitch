import {Dispatch, FC, SetStateAction} from 'react';
import cn from "clsx";
import styles from './BlockSelect.module.scss'
import {SelectBlockEnum} from "../index";

const BlockSelect: FC<{ selectBlock: SelectBlockEnum, setSelectBlock: Dispatch<SetStateAction<SelectBlockEnum>> }> = ({selectBlock, setSelectBlock}) => {
    const dataSelectCategory = [SelectBlockEnum.Home, SelectBlockEnum.About]
    return (
        <div className={styles.blockSelect}>
            {dataSelectCategory.map((select) => <h3 key={select} className={cn({[styles.active]: selectBlock === select})}
                                                    onClick={() => setSelectBlock(select)}>{select}</h3>)}

        </div>
    );
}

export default BlockSelect;