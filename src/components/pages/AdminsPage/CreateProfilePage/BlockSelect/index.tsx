import {Dispatch, FC, SetStateAction} from 'react';
import cn from "clsx";
import styles from "../../../MainPage/SelectCategory/SelectCategory.module.scss";
import {SelectCategoryCreateProfile} from "../index";

const BlockSelect: FC<{setSelectCategory:Dispatch<SetStateAction<SelectCategoryCreateProfile>>,selectCategory:SelectCategoryCreateProfile}> = ({setSelectCategory,selectCategory}) => {
    return (
        <div className={styles.selectCategory}>
            <h3 className={cn({[styles.active]: selectCategory === SelectCategoryCreateProfile.About})}
                onClick={() => setSelectCategory(SelectCategoryCreateProfile.About)}>{SelectCategoryCreateProfile.About}</h3>
            <h3 className={cn({[styles.active]: selectCategory === SelectCategoryCreateProfile.Brand})}
                onClick={() => setSelectCategory(SelectCategoryCreateProfile.Brand)}>{SelectCategoryCreateProfile.Brand}</h3>
        </div>
    );
}

export default BlockSelect;