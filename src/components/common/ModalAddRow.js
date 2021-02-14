import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from '../../redux/actionsContractDom'
import { toggleAddRow } from '../../redux/actionsModals'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'
import { LayoutSplit, Square } from 'react-bootstrap-icons'

const ModalAddRow = () => {
    const open = useSelector(state => state.modals.addRow)
    const dispatch = useDispatch()
    const _handleClose = () => dispatch(toggleAddRow());
    const _addRow = (numOfColumns) => {
        dispatch(addRow(numOfColumns))
        _handleClose()
    }

    return (
        <Modal show={open} animation={false} onHide={_handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Row Layout</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
                <Container>
                    <Row>
                        <Col onClick={() => _addRow(1)} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Square width='40' height='40' /> One Column
                                </Col>
                        <Col onClick={() => _addRow(2)} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}><LayoutSplit width='40' height='40' />
                            Two Column
                            </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}



export default ModalAddRow
