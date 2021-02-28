import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../../redux/actions/actionsContractDom'
import { toggleChooseImg } from '../../redux/actions/actionsModals'
import { Modal, Button, Row, Container } from 'react-bootstrap'
import { SmartLogo, OptimaLogo, SunLogo, PldtLogo, QrCode } from '../../assets';
import { ELEMENTTYPE } from '../../redux/config/elementSchema'

const ModalAddRow = () => {
    const { columnId, rowId } = useSelector(state => state.editable)
    const open = useSelector(state => state.modals.chooseImg)
    const dispatch = useDispatch()
    const _handleClose = () => dispatch(toggleChooseImg());
    const _addImg = (imgSrc) => {
        dispatch(addElement(ELEMENTTYPE.img, columnId, rowId, imgSrc))
        _handleClose()
    }

    return (
        <Modal show={open} animation={false} onHide={_handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose from library</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
                <Container style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Row onClick={() => _addImg(SmartLogo)}>
                        <img src={SmartLogo} alt='SmartLogo' width='100px' height='60px' />
                    </Row>
                    <Row onClick={() => _addImg(OptimaLogo)}>
                        <img src={OptimaLogo} alt='OptimaLogo' width='100px' height='40px' />
                    </Row>
                    <Row onClick={() => _addImg(SunLogo)}>
                        <img src={SunLogo} alt='SunLogo' width='100px' height='75px' />
                    </Row>
                    <Row onClick={() => _addImg(PldtLogo)}>
                        <img src={PldtLogo} alt='PldtLogo' width='100px' height='75px' />
                    </Row>
                    <Row onClick={() => _addImg(QrCode)}>
                        <img src={QrCode} alt='QrCode' width='100px' height='75px' />
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
