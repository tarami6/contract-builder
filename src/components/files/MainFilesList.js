import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllFiles, selectFile } from 'redux/actions'
import { makeStyles } from '@material-ui/core';
import ListItem from './ListItem'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    row: {
        padding: '5px 10px',
        border: '1px solid #525661',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 33,
        cursor: 'pointer',
        '&:hover': {
            background: '#2a3040',
            border: 'none'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column'
        }
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#fff',
    }
}));

const MainFileList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const files = useSelector(state => state.files.data)
    const selectedFile = useSelector(state => state.files.selectedFile)

    useEffect(() => {
        dispatch(getAllFiles())
    }, [])

    useEffect(() => {
        if (files.length && !selectedFile) {
            dispatch(selectFile(files[0]._id))
        }
    }, [files])

    if (files?.length) {
        return (
            <div>
                <div className={classes.root}>
                    {files.map((file) => <ListItem key={file._id} file={file} />)}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Create A new file
            </div>
        )
    }
};

export default MainFileList;