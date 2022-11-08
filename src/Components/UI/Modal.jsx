import React from 'react';
import styled from "styled-components";

const StyledModal = styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    `;

const ModalWindow = styled.div`
      padding: 25px;
      background: white;
      border-radius: 16px;
      min-width: 250px;
    `;

const Modal = ({children, visible, setVisible}) => {
    return (
        <div>
            {visible && (
                <StyledModal onClick={() => setVisible(false)}>
                    <ModalWindow onClick={(e) => e.stopPropagation()}>
                        {children}
                    </ModalWindow>
                </StyledModal>
            )}
        </div>
    );
};

export default Modal;