import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../../redux/actions/actionsContractDom'
import { toggleChooseImg } from '../../redux/actions/actionsModals'
import { Modal, Button, Row, Container } from 'react-bootstrap'
import { SmartLogo, OptimaLogo, SunLogo, PldtLogo, QrCode } from '../../assets';
import { ELEMENTTYPE } from '../../redux/config/elementSchema'

const ModalChooseImg = () => {
    const { columnId, rowId } = useSelector(state => state.editable)
    const open = useSelector(state => state.modals.chooseImg)
    const dispatch = useDispatch()
    const _handleClose = () => dispatch(toggleChooseImg());
    const _addImg = (imgSrc) => {
        dispatch(addElement(ELEMENTTYPE.img, columnId, rowId, imgSrc))
        _handleClose()
    }

    const getHeigt = (index) => {
        switch (index) {
            case 0:
                return '60px'
            case 1:
                return '40px'
            case 2:
            case 3:
            case 4:
                return '75px'
            default:
                return '100px'
        }
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
                    {
                        [SmartLogo, OptimaLogo, SunLogo, PldtLogo, QrCode].map((icon, index) => (
                            <Row key={index} onClick={() => _addImg(icon)}>
                                <img src={icon} alt={`${icon}Img`} width='100px' height={getHeigt(index)} />
                            </Row>
                        )
                        )
                    }
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



export default ModalChooseImg
