import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleFileName, renameFile } from 'redux/actions'
import { makeStyles, Fade, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom'
import { AddToPhotos } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        zIndex: '3',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        width: '700px',
        height: 350,
        backgroundColor: '#fff',
        borderRadius: "15px",
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    text: {
        padding: 0,
        fontSize: "20px",
        margin: 0,
        fontWeight: 200,
        marginLeft: "10px",
    },


}));

const ModalFileName = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();
    const open = useSelector(state => state.modals.fileName)
    const _currentFile = useSelector(state => state.contractDom)
    const [name, setName] = useState('')
    const [err, setErr] = useState(undefined)

    useEffect(() => {
        setName(_currentFile.name)
    }, [_currentFile.name])

    const _handleClose = () => {
        dispatch(toggleFileName())
    }

    const _handleSave = () => {
        let locationSrt = location.pathname.substring(0, 5)

        if (!name.length) {
            setErr('Sorry Name cant be empty')
        } else {
            dispatch(renameFile(name))
            _handleClose()
            if (location.pathname !== '/newFile' && locationSrt !== '/file') {
                history.push('/newFile')
            }
        }
    }

    const _handleChange = (e) => {
        e.preventDefault()
        if (err) {
            setErr(undefined)
        }
        setName(e.target.value)
    }

    const text = err ? err : 'Create New File'

    return (
        <Fade in={open} >
            <div className={classes.root}>

                <div className={classes.contentContainer}>
                    <div style={{ display: 'flex', alignItems: "center", }}>
                        <AddToPhotos style={{
                            fontSize: "30px",
                            color: '#FBAA34',
                        }} />
                        <p className={classes.text}>{text}</p>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            style={{ width: '50%' }}
                            onChange={_handleChange}
                            value={name}
                        />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}>
                        <Button
                            style={{ opacity: 0.5 }}
                            onClick={_handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#49D846', color: '#fff' }}
                            onClick={_handleSave}
                        >
                            Create
                        </Button>
                    </div>
                </div>

            </div>
        </Fade>
    );
};

export default ModalFileName;