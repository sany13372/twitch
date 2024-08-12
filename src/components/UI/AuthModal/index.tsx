import {FC} from 'react';
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import ImgLogo from '../../../assets/TwitchLogo.svg'
import SigInBlock from "./SigInBlock";
import styles from './authModal.module.scss'
import {RxCross1} from "react-icons/rx";
import SignUpBlock from "./SignUpBlock";

const AuthModal: FC = () => {
    const setOpenModal = useStoreAuthLayout((store) => store.setOpenModal)
    const openModal = useStoreAuthLayout((store) => store.openModal)
    const handleCloseModal = () => setOpenModal('')
    return (
        <div className={styles.modal} onClick={() => setOpenModal('')}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.cross}>
                    <RxCross1 onClick={handleCloseModal} color="white" style={{marginRight: 0}}/>
                </div>
                <div className={styles.modalHeader}>
                    <img src={ImgLogo} alt="Logo"/>
                    <h2 id="unstyled-modal-title" className="modal-title">
                        Join Twitch today
                    </h2>
                </div>
                {openModal === 'LogIn' && <SigInBlock/>}
                {openModal === 'SignUp' && <SignUpBlock/>}
            </div>
        </div>
    );
}

export default AuthModal;