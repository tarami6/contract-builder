import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import MainModal from './ModalMain'
import { toggleFileName, renameFile } from '../../redux/actions'
import { Typography, makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom'

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
        if (!name.length) {
            setErr('Sorry Name cant be empty')
        } else {
            dispatch(renameFile(name))
            _handleClose()
            // if (location.pathname !== '/newFile') {
            //     history.push('/newFile')
            // }
        }
    }

    const _handleChange = (e) => {
        e.preventDefault()
        if (err) {
            setErr(undefined)
        }
        setName(e.target.value)
    }

    const text = err ? err : 'You will create a new file, please choose a name'

    return (
        <MainModal
            open={open}
            handleClose={_handleClose}
            handleSave={_handleSave}
            title={'File Name'}
            body={
                <>
                    <Typography variant='h6' className={classes.text} style={{ color: err ? 'red' : '#b9b9b9' }}>
                        {text}
                    </Typography>
                    <div className={classes.inputHolder}>
                        <input name={'name'} type='text' onChange={_handleChange} value={name} />
                    </div>
                </>
            }
        />
    );
};

export default ModalFileName;