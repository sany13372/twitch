import {FC, InputHTMLAttributes} from 'react';
import styles from './DefaultInput.module.scss'

interface IDefaultInput extends InputHTMLAttributes<HTMLInputElement>{}
const DefaultInput: FC<IDefaultInput> = (props) => {
    return (
        <input className={styles.DefaultInput} {...props}/>
    );
}

export default DefaultInput;