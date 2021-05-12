import React from "react";
import { Modal, Button } from 'react-bootstrap'

const ModalMain = ({ open, title, body, handleSave, handleClose }) => {

    return (
        <Modal show={open} animation={false} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: 'column' }}>
                {body}
            </Modal.Body>
            <Modal.Footer>
                {
                    handleSave &&
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                }

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMain