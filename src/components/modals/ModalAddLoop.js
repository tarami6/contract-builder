import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Typography, makeStyles } from '@material-ui/core';
import { addElement } from '../../redux/actions/actionsContractDom'
import { setLoop } from '../../redux/actions/actionsEditable'
import { toggleAddLoop } from '../../redux/actions/actionsModals'
import { Modal, Button, Row, Container } from 'react-bootstrap'
import { SmartLogo, OptimaLogo, SunLogo, PldtLogo, QrCode } from '../../assets';
import { ELEMENTTYPE } from '../../redux/config/elementSchema'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 10px',
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30,
        justifyContent: 'space-between',
        cursor: 'pointer',
        '&:hover': {
            background: '#2a3040',
            border: 'none'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: '15px',
        color: '#b9b9b9',
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },
    inputHolder: {
        margin: '15px'
    }
}));

const ModalAddLoop = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { columnId, rowId } = useSelector(state => state.editable)
    const open = useSelector(state => state.modals.addLoop)
    const _row = useSelector(state => state.contractDom.rows[rowId])
  
    const [name, setName] = useState('')
    //TODO 

    useEffect(() => {
        if(open) {
            if(_row.loop !== name ){
                setName(_row.loop)
            } 
        }
    }, [open])

    const _handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const _handleClose = () => {
        dispatch(toggleAddLoop())
    } 

    const _handleSave = () => {
        if(_row.loop !== name){
            dispatch(setLoop(rowId, name))
        }
        
        _handleClose()
    }

    return (
        <Modal show={open} animation={false} onHide={_handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Loop </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: 'column' }}>
                <Typography variant='h6' className={classes.text}>
                    Plese name the loop key name from the Json
                </Typography>
                <div className={classes.inputHolder}>
                    <input name={'name'} type='text' onChange={_handleChange} value={name}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={_handleSave}>
                    Save
                </Button>
                <Button variant="secondary" onClick={_handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddLoop;