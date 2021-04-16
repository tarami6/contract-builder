import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleCopyHtml } from '../../redux/actions/actionsModals'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ComponentToHtml from '../print/ComponentToHtml'
import { Provider } from 'react-redux'
import store from '../../redux/strore'

var myDiv = document.createElement('div');

ReactDOM.render(
  <Provider store={store}>
    <ComponentToHtml />
  </Provider>,
  myDiv
);

const ModalCopyHtml = () => {
    const dispatch = useDispatch()
    const _handleClose = () => dispatch(toggleCopyHtml())
    const open = useSelector(state => state.modals.copyHtml)
    
    return (
        <Modal show={open} animation={false} onHide={_handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Html </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: 'column' }}>
            {myDiv.innerHTML}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    )
}



export default ModalCopyHtml
