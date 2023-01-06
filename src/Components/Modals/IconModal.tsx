import * as React from 'react';
import Modal from '@mui/material/Modal';
import StyledModalBox from "./StyledModalBox";
import {IconButton, IconProps} from "@mui/material";
import {ReactElement, ReactNode} from "react";

type ButtonProps = {
    visible : boolean;
    setVisible : any;
    children: ReactNode;
    icon: ReactElement<IconProps>;
};

export default function IconModal({visible, setVisible, icon, children}: ButtonProps) {
    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);

    return (
        <div>
            <IconButton
                aria-label="edit request"
                size="small"
                onClick={handleOpen}
            >
                {icon}
            </IconButton>

            <Modal
                open={visible}
                onClose={handleClose}
            >
                <StyledModalBox>
                    {children}
                </StyledModalBox>
            </Modal>
        </div>
    );
}