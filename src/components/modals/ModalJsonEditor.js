import React, { useState } from 'react';
import { makeStyles, Fade, Button } from '@material-ui/core';
import MonacoEditor from 'react-monaco-editor';
import { useSelector, useDispatch } from 'react-redux'
import { saveJson, toggleVarJson } from 'redux/actions'

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
        width: '80vw',
        height: '80vh',
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

const ModalJsonEditor = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const varJson = useSelector(state => state.varJson)
    const open = useSelector(state => state.modals.varJson)

    const [code, setCode] = useState(JSON.stringify(varJson, null, '\t'))

    const [error, setError] = useState('')

    const _onChange = (newValue, e) => {
        if (error.length) {
            setError('')
        }
        setCode(newValue)
    }

    const _handleSave = () => {
        try {
            const obj = JSON.parse(code)
            dispatch(saveJson(obj))
            _handleClose()
        } catch (e) {
            console.log('e', e)
            setError(e.toString())
        }
    }

    const _handleClose = () => {
        dispatch(toggleVarJson())
    }

    const options = {
        selectOnLineNumbers: true,
        validate: true,
    };

    return (
        <Fade in={open} >
            <div className={classes.root}>
                <div className={classes.contentContainer}>
                    <div style={{ height: '30px' }}><p style={{ color: 'red' }}>{error}</p></div>
                    <MonacoEditor
                        width="100%"
                        height="100%"
                        language="json"
                        theme="vs-dark"
                        value={code}
                        options={options}
                        onChange={_onChange}
                    />

                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "15px",
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
                            Save
                    </Button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ModalJsonEditor;