import styles from "../Inputs.module.scss";
import {FC} from "react";
import {IAuthPageInput} from "../../../../types/user.types";

const PasswordInput:FC<IAuthPageInput> = ({ register, errors,placeholder }) => (
    <label className={styles.label}>
        <input
            {...register('password', {
                required: 'Введите пароль!',
                minLength: 4,
                maxLength: 20,
            })}
            className={styles.nameField}
            type="password"
            placeholder={placeholder}
        />
        {errors.password && (
            <span className={styles.error_alert}>{errors.password?.message}</span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
            <span className={styles.error_alert}>Минимум 4 символа!</span>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
            <span className={styles.error_alert}>Не более 20 символов!</span>
        )}
    </label>
)

export default PasswordInput