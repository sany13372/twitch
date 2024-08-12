import {FC} from 'react';
import {IGameStream} from "../../../types/category.types";
import styles from './CategoryCard.module.scss'
import {useNavigate} from "react-router-dom";

const CategoryCard: FC<{ category: IGameStream }> = ({category}) => {
    const actions = ['FPS', 'Shooter', 'Action']
    const nav = useNavigate()
    return (
        <div className={styles.card}>
            {category.attributes.categoryImg.data && category?.attributes?.categoryImg?.data.map((img) =>
                <img onClick={() => nav('/')} src={`http://localhost:1337${img.attributes.formats.thumbnail.url}`} alt="Logo"/>)}
            <h4>{category.attributes.categoryGame}</h4>
            <h5>{category.attributes.streamers?.data.length} viewers</h5>
            <div>
                {actions.map((action) => <div key={action}>{action}</div>)}
            </div>
        </div>
    );
}

export default CategoryCard;