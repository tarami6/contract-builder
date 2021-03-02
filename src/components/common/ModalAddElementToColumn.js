import React from 'react';
import { ELEMENTTYPE } from '../../redux/config/elementSchema';
import { addElement } from '../../redux/actions/actionsContractDom';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import {
  FileFont,
  FileImage,
  FileEarmarkMedical,
  PencilSquare,
} from 'react-bootstrap-icons';

const useStyle = makeStyles(() => ({
  modalBody: { display: 'flex', flexDirection: 'column' },
  addElement: { display: 'flex', alignItems: 'center', margin: '15px 0' },
  element: { width: 20, height: 20 },
}));

const ModalAddElementToColumn = ({ open, onClick, columnId, rowId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const _handleClose = () => onClick();
  const _addElement = (type) => {
    dispatch(addElement(type, columnId, rowId));
    _handleClose();
  };

  return (
    <Modal show={open} animation={false} onHide={_handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Element</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.modalBody}>
        <div
          onClick={() => _addElement(ELEMENTTYPE.text)}
          className={classes.addElement}
        >
          <FileFont className={classes.element} /> Add Text
        </div>
        <div
          onClick={() => _addElement(ELEMENTTYPE.img)}
          className={classes.addElement}
        >
          <FileImage className={classes.element} /> Add Image
        </div>
        <div
          onClick={() => _addElement(ELEMENTTYPE.variable)}
          className={classes.addElement}
        >
          <FileEarmarkMedical className={classes.element} /> Add Varibale
        </div>
        <div
          onClick={() => _addElement(ELEMENTTYPE.signature)}
          className={classes.addElement}
        >
          <PencilSquare className={classes.element} /> Add Signature
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={_handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddElementToColumn;
