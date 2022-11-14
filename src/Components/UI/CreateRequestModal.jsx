import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {styled, Box} from "@mui/material";

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    border: 1px solid #000;
    padding: 50px;
    box-shadow: white;
`;

export default function CreateRequestModal({visible, setVisible, children}) {
    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Добавить заявку</Button>
            <Modal
                open={visible}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledBox>
                    {children}
                </StyledBox>
            </Modal>
        </div>
    );
}