import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleCopyHtml } from '../../redux/actions/actionsModals'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ComponentToHtml from '../print/ComponentToHtml'
import { Provider } from 'react-redux'
import { store } from '../../redux/strore'
import MainModal from './ModalMain'

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
        <MainModal
            open={open}
            handleClose={_handleClose}
            title={'Html'}
            body={
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    {myDiv.innerHTML}
                </div>
            }
        />
    )
}



export default ModalCopyHtml
