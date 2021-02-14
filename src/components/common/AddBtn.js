import React, { useContext } from "react";
import { useDispatch } from 'react-redux'
import { toggleAddRow } from '../../redux/actionsModals'
import { ViewList } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'

const AddBtn = () => {
    const dispatch = useDispatch()
    return (
        <Button variant="outline-light"   style={{margin: '25px 0', backgroundColor: '#ADD8E5', color: 'grey'}} onClick={() => dispatch(toggleAddRow())} id={'123'}>
            <ViewList /> Add Row
        </Button>
    )
}

export default AddBtn
