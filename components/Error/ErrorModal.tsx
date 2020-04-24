import React from "react";
import { Modal } from "semantic-ui-react";

const ErrorModal = ({coin, text, isModalOpen, onClose}) => {
    return (
        <Modal open={isModalOpen} onClose={onClose} style={{ top: '33%' }}>
            <Modal.Header>{coin}</Modal.Header>
            <Modal.Content>
                <h1>{text}</h1>
            </Modal.Content>
        </Modal>
    );
};

export default ErrorModal;
