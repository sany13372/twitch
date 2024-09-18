import {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {IInputs} from "../../../../types/user.types";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {AuthServices} from "../../../../services/auth.services";
import {saveToStorage} from "../../../../utils/authHelper";
import styles from "../SigInBlock/SigInBlock.module.scss";
import EmailInput from "../../Inputs/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput";
import {Skeleton} from '@mantine/core';
import {UserServices} from "../../../../services/user.services";

const SignUpBlock: FC = () => {
    const [spinner, setSpinner] = useState<boolean>(false)
    const nav = useNavigate()
    const {
        register,
        formState: {errors},
        resetField,
        getValues
    } = useForm<IInputs>()
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const setUser = useStoreAuthLayout((store) => store.setUser)
    const onSubmit = async () => {
        setSpinner(true)
        const data = {email: getValues('email'), password: getValues('password')}
        await AuthServices.loginUser({identifier: data.email, password: data.password})
            .then(({data}) => {
                if (data) {
                    UserServices.getUser(data.user.id)
                        .then((response) => {
                            // todo: убрать костыль
                            setUser(response.data)
                            saveToStorage(response.data, data.jwt)
                            resetField('email')
                            resetField('password')
                            setSpinner(true)
                        })

                }
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
                setSpinner(false)
                setOpenModal('')
                nav('/')
            })
    }
    return (
        <div className={styles.form}>
            <Skeleton visible={spinner}>
                <div className={styles.blockSignUp}>
                    <h6 className={styles.labelField}>Email</h6>
                    <EmailInput register={register} placeholder={'Email'} errors={errors}/>
                    <h6 className={styles.labelField}>Password</h6>
                    <PasswordInput register={register} errors={errors} placeholder={'Password'}/>
                    {!errors.email && <button className={styles.buttonForm} onClick={onSubmit}>SignUp</button>}
                </div>
            </Skeleton>
        </div>
    );
}
export default SignUpBlock;