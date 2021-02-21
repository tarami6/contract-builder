import React from "react";
import { ELEMENTTYPE } from '../../redux/config/elementSchema'
import { addElement } from '../../redux/actions/actionsContractDom'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { FileFont, FileImage, FileEarmarkMedical, PencilSquare } from 'react-bootstrap-icons'

const ModalAddElementToColumn = ({ open, onClick, columnId , rowId}) => {
    const dispatch = useDispatch()
    const _handleClose = () => onClick()
    const _addElement = (type) => {
        dispatch(addElement(type, columnId, rowId))
        _handleClose()
    }

    return (
        <Modal show={open} animation={false} onHide={_handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Element</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: 'column' }}>
                <div onClick={() => _addElement(ELEMENTTYPE.text)} style={{ display: 'flex', alignItems: "center", margin: '15px 0' }}><FileFont width='20' height='20' /> Add Text</div>
                <div onClick={() => _addElement(ELEMENTTYPE.img)} style={{ display: 'flex', alignItems: "center", margin: '15px 0' }}><FileImage width='20' height='20' />  Add Image</div>
                <div onClick={() => _addElement(ELEMENTTYPE.variable)} style={{ display: 'flex', alignItems: "center", margin: '15px 0' }}><FileEarmarkMedical width='20' height='20' /> Add Varibale</div>
                <div onClick={() => _addElement(ELEMENTTYPE.signature)} style={{ display: 'flex', alignItems: "center", margin: '15px 0' }}><PencilSquare width='20' height='20' /> Add Signature</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal >
    )
}



export default ModalAddElementToColumn
