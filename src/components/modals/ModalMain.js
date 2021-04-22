import React, { useState, useEffect } from "react";
import { Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Row, Container } from 'react-bootstrap'

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


const ModalMain = ({ open, title, body, handleSave, handleClose }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Modal show={open} animation={false} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex", flexDirection: 'column' }}>
                {body}
            </Modal.Body>
            <Modal.Footer>
                {
                    handleSave &&
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                }

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMain