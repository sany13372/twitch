import {FC, useState} from 'react';
import {AuthServices} from "../../../../services/auth.services";
import {IInputs} from "../../../../types/user.types";
import {saveToStorage} from "../../../../utils/authHelper";
import NameInput from "../../Inputs/NameInput";
import EmailInput from "../../Inputs/EmailInput";
import PasswordInput from "../../Inputs/PasswordInput";
import {useForm} from "react-hook-form";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {useNavigate} from "react-router-dom";
import styles from './SigInBlock.module.scss'
import {Skeleton} from "@mantine/core";
import {UserServices} from "../../../../services/user.services";

const SigInBlock: FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
    const [spinner, setSpinner] = useState<boolean>(false)
    const nav = useNavigate()
    const steps = [1, 2];
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
        const dataDto = {email: getValues('email'), username: getValues('username'), password: getValues('password')}
        await AuthServices.registerUser({...dataDto})
            .then((request ) => {
                if (request?.data) {
                    saveToStorage(request.data.user, request.data.jwt)
                    UserServices.getUser(request.data.user.id)
                        .then(({data }) => {
                            setUser(data)
                        })
                    resetField('email')
                    resetField('username')
                    resetField('password')
                    setSpinner(true)
                }
            })
            .catch((err) => console.log(err.message))
            .finally(() => {
                setSpinner(false)
                setOpenModal('')
                setActiveStep(0);
                nav('/')
            })
    }

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={styles.form}>
            <Skeleton visible={spinner}>
                    <div>
                        {activeStep === 0 &&
                            <div>
                                <h6 className={styles.labelField}>Username</h6>
                                <NameInput register={register} errors={errors} placeholder={'Username'}/>
                                <h6 className={styles.labelField}>Password</h6>
                                <PasswordInput register={register} errors={errors} placeholder={'Password'}/>
                            </div>
                        }
                        {activeStep === 1 && <>
                            <h6 className={styles.labelField}>Email</h6>
                            <EmailInput register={register} placeholder={'Email'} errors={errors}/>
                        </>}
                    </div>
                    <h5 className={styles.stepTitle}>Step {activeStep + 1} of {steps.length}</h5>
                    <div className={styles.footer}>
                        <h5 onClick={() => setOpenModal('SignUp')}>Already a Twitch user? Log in</h5>
                        {activeStep + 1 !== steps.length ?
                            <button onClick={handleNext}>Next Step</button>
                            : <button onClick={handleBack}>Back Step</button>}
                        {!errors.email && activeStep === 1 && <button role="buttonForm" onClick={onSubmit}>Register</button>}
                    </div>
            </Skeleton>
        </div>
    );
}

export default SigInBlock;