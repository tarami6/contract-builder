import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../../redux/actions/actionsContractDom';
import { toggleChooseImg } from '../../redux/actions/actionsModals';
import { Modal, Button, Row, Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { SmartLogo, OptimaLogo, SunLogo, PldtLogo, QrCode } from '../../assets';
import { ELEMENTTYPE } from '../../redux/config/elementSchema';

const useStyle = makeStyles(() => ({
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  modal: { display: 'flex', flexDirection: 'column' },
  addElement: { display: 'flex', alignItems: 'center', margin: '15px 0' },
  image: { width: 100, height: 'auto' },
}));

const ModalAddRow = () => {
  const classes = useStyle();
  const { columnId, rowId } = useSelector((state) => state.editable);
  const open = useSelector((state) => state.modals.chooseImg);
  const dispatch = useDispatch();
  const _handleClose = () => dispatch(toggleChooseImg());
  const _addImg = (imgSrc) => {
    dispatch(addElement(ELEMENTTYPE.img, columnId, rowId, imgSrc));
    _handleClose();
  };

  return (
    <Modal show={open} animation={false} onHide={_handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Choose from library</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.modalBody}>
        <Container className={classes.container}>
          <Row onClick={() => _addImg(SmartLogo)}>
            <img src={SmartLogo} alt='SmartLogo' className={classes.image} />
          </Row>
          <Row onClick={() => _addImg(OptimaLogo)}>
            <img src={OptimaLogo} alt='OptimaLogo' className={classes.image} />
          </Row>
          <Row onClick={() => _addImg(SunLogo)}>
            <img src={SunLogo} alt='SunLogo' className={classes.image} />
          </Row>
          <Row onClick={() => _addImg(PldtLogo)}>
            <img src={PldtLogo} alt='PldtLogo' className={classes.image} />
          </Row>
          <Row onClick={() => _addImg(QrCode)}>
            <img src={QrCode} alt='QrCode' className={classes.image} />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddRow;
