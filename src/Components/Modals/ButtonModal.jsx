import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import StyledModalBox from "./StyledModalBox";

export default function ButtonModal({visible, setVisible, buttonText, children}) {
    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>{buttonText}</Button>
            <Modal
                open={visible}
                onClose={handleClose}
                aria-labelledby="modal-title"
            >
                <StyledModalBox>
                    {children}
                </StyledModalBox>
            </Modal>
        </div>
    );
}