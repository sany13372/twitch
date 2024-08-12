import styles from '../Inputs.module.scss'
import {FC} from "react";
import {IAuthPageInput} from "../../../../types/user.types";

const EmailInput: FC<IAuthPageInput> = ({register, errors,placeholder}) => (
    <label className={styles.label}>
        <input
            {...register('email', {
                required: 'Введите Email!',
                // pattern: {
                //     // value: /\S+@\S+\.\S+/,
                //     message: 'Неправильный Email!',
                // },
            })}
            className={styles.nameField}
            type="email"
            placeholder={placeholder}
        />
        {errors.email && (
            <span className={styles.error_alert}>{errors.email?.message}</span>
        )}
    </label>
)

export default EmailInput