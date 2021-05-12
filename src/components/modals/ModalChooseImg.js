import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../../redux/actions/actionsContractDom'
import { toggleChooseImg } from '../../redux/actions/actionsModals'
import { Row, Container } from 'react-bootstrap'
import { ELEMENTTYPE } from '../../redux/config/elementSchema'
import MainModal from './ModalMain'
import { uid } from 'uid'

const optimaLogo = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/optimaLogo.jpg'
const pldtLogo = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/pldt.jpg'
const qrCode = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/qrCode.png'
const smartLogo = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/smartLogo.jpg'
const sunLogog = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/sunLogo.jpeg'
const tntLogo = 'https://zappa-mosh-social2.s3.eu-central-1.amazonaws.com/tntLogo.jpg'

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
        <MainModal
            open={open}
            handleClose={_handleClose}
            title={'Choose from library'}
            body={
                <Container style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    {
                        [optimaLogo, pldtLogo, qrCode, smartLogo, sunLogog, tntLogo].map((src, index) => (
                            <Row key={uid()} onClick={() => _addImg(src)}>
                                <img src={src} alt={`${src}Img`} width='100px' height={getHeigt(index)} />
                            </Row>
                        )
                        )
                    }
                </Container>
            }
        />
    )
}



export default ModalChooseImg
