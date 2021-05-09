import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleCopyHtml, resetFile } from 'redux/actions'
import { Modal, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ComponentToHtml from '../print/ComponentToHtml'
import { Provider } from 'react-redux'
import { store } from 'redux/strore'
import MainModal from './ModalMain'
import { useLocation } from 'react-router-dom'

var myDiv = document.createElement('div');

ReactDOM.render(
    <Provider store={store}>
        <ComponentToHtml />
    </Provider>,
    myDiv
);

const ModalCopyHtml = () => {
    const dispatch = useDispatch()
   
    const open = useSelector(state => state.modals.copyHtml)
    const location = useLocation()

    const _handleClose = () =>  {
        if(location.pathname === '/') {
            dispatch(resetFile())
        }
        dispatch(toggleCopyHtml())
    }

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
