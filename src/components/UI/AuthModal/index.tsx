import {FC} from 'react';
import { Modal } from '@mui/base/Modal';


const AuthModal: FC = () => {
    return (
        <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            slots={{ backdrop: StyledBackdrop }}
        >
            <ModalContent sx={{ width: 400 }}>
                <h2 id="unstyled-modal-title" className="modal-title">
                    Text in a modal
                </h2>
                <p id="unstyled-modal-description" className="modal-description">
                    Aliquid amet deserunt earum!
                </p>
            </ModalContent>
        </Modal>
    );
}

export default AuthModal;