import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleCopyHtml, resetFile } from 'redux/actions'
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
                    {
                        `
                        <!DOCTYPE html>
                            <html lang="en">
                                <head>
                                    <style>
                                    .MuiTableContainer-root {
                                        width: 100%;
                                        overflow-x: auto;
                                    }
                                    .MuiPaper-rounded {
                                        border-radius: 4px;
                                    }
                                    .makeStyles-table-66 {
                                        min-width: 650px;
                                    }
                                    .MuiTable-root {
                                        width: 100%;
                                        display: table;
                                        border-spacing: 0;
                                        border-collapse: collapse;
                                    }
                                    .MuiTableHead-root {
                                        display: table-header-group;
                                    }
                                    .MuiTableRow-root {
                                        color: inherit;
                                        display: table-row;
                                        outline: 0;
                                        vertical-align: middle;
                                    }
                                    .MuiTableCell-head {
                                        color: rgba(0, 0, 0, 0.87);
                                        font-weight: 500;
                                        line-height: 1.5rem;
                                    }
                                    .MuiTableCell-root {
                                        display: table-cell;
                                        padding: 16px;
                                        font-size: 0.875rem;
                                        text-align: left;
                                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                                        border-bottom: 1px solid rgba(224, 224, 224, 1);
                                        letter-spacing: 0.01071em;
                                        vertical-align: inherit;
                                    }
                                    .MuiTableBody-root {
                                        display: table-row-group;
                                    }
                                    .MuiTableRow-root {
                                        color: inherit;
                                        display: table-row;
                                        outline: 0;
                                        vertical-align: middle;
                                    }
                                    .MuiTableCell-root {
                                        display: table-cell;
                                        padding: 16px;
                                        font-size: 0.875rem;
                                        text-align: left;
                                        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
                                        font-weight: 400;
                                        line-height: 1.43;
                                        border-bottom: 1px solid rgba(224, 224, 224, 1);
                                        letter-spacing: 0.01071em;
                                        vertical-align: inherit;
                                    }
                                    .MuiTableCell-body {
                                        color: rgba(0, 0, 0, 0.87);
                                    }
                                    </style>
                                </head>

                                <body>
                                    ${ myDiv.innerHTML}
                                </body>
                            </html>
                        `
                    }
                </div>
            }
        />
    )
}



export default ModalCopyHtml
