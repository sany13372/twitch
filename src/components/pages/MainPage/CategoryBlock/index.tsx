import {FC} from 'react';
import {useStoreMainPage} from "../store";
import CategoryCard from "../../../UI/CategoryCard";
import styles from './CategoryBlock.module.scss'

const CategoryBlock: FC = () => {
    const categories = useStoreMainPage((store) => store.gameCategories)

    return (
        <div className={styles.CategoryBlock}>
            {categories.length > 0 ? categories.map((category) => <CategoryCard key={category.id} category={category}/>) :
            <h4>Category empty</h4>}
        </div>
    );
}

export default CategoryBlock;