import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from '@emotion/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalComponent = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);
    const handleCloseClick = () => {
        onClose();
    };
    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <AiOutlineCloseCircle onClick={handleCloseClick} cursor='pointer' color='#18a100'/>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;
    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }

}

const StyledModalTitle = styled.h3`
font-weight: 500;
color: #18a100;
font-family: Roboto Slab, serif;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 400px;
  height: 200px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
