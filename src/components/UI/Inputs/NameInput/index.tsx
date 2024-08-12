import styles from '../Inputs.module.scss'
import {FC} from "react";
import {IAuthPageInput} from "../../../../types/user.types";

const NameInput:FC<IAuthPageInput> = ({ register, errors,placeholder,title }) => (
    <label className={styles.label}>
        <input
            {...register('username' || title, {
                required: 'Заполните поле!',
                minLength: 2,
                maxLength: 15,
                pattern: {
                    value: /^[а-яА-Яa-zA-ZёЁ]*$/,
                    message: 'Недопустимое значение!',
                },
            })}
            className={styles.nameField}
            type="text"
            placeholder={placeholder}
        />
        {errors.username && (
            <span className={styles.error_alert}>{errors.username?.message}</span>
        )}
        {errors.username && errors.username.type === 'minLength' && (
            <span className={styles.error_alert}>Минимум 2 символа!</span>
        )}
        {errors.username && errors.username.type === 'maxLength' && (
            <span className={styles.error_alert}>Не более 15 символов!</span>
        )}
    </label>
)

export default NameInput