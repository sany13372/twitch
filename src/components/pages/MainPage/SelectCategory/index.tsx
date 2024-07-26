import {FC} from 'react';
import cn from "clsx";
import {useStoreMainPage} from "../store";
import {SelectCategoryStreamEnum} from "../../../../types";
import styles from './SelectCategory.module.scss'

const SelectCategory: FC = () => {
    const selectCategory = useStoreMainPage((store) => store.selectCategoryStream)
    const setSelectCategory = useStoreMainPage((store) => store.setSelectCategoryStream)

    return (
        <div className={styles.selectCategory}>
            <h3 className={cn({[styles.active]: selectCategory === SelectCategoryStreamEnum.Categories})}
                onClick={() => setSelectCategory(SelectCategoryStreamEnum.Categories)}>{SelectCategoryStreamEnum.Categories}</h3>
            <h3 className={cn({[styles.active]: selectCategory === SelectCategoryStreamEnum.LiveChannels})}
                onClick={() => setSelectCategory(SelectCategoryStreamEnum.LiveChannels)}>{SelectCategoryStreamEnum.LiveChannels}</h3>
        </div>
    );
}

export default SelectCategory;