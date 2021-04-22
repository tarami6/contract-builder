import React, { useState, useEffect } from 'react';
import { Typography, Avatar, makeStyles } from '@material-ui/core';
import { InsertDriveFile } from '@material-ui/icons';
import EditAndDelete from './EditAndDelete'
import { selectFile } from 'redux/actions'
import { useDispatch, useSelector } from 'react-redux'


const useStyles = makeStyles({
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
        color: props => props.currentSelected ? '#000' : '#fff',
    }
});


const ListItem = ({ file }) => {
    const dispatch = useDispatch()
    const files = useSelector(state => state.files)
    let currentSelected = files.selectedFile === file._id
    const classes = useStyles( {currentSelected} )
    const trasformDate = (fileDate) => {
        let date;
        date = new Date(fileDate).toUTCString();
        date = date.split(' ').slice(0, 4).join(' ');
        return date.toString()
    }

    const _selectFile = () => {
        dispatch(selectFile(file._id))
    }

    return (
        <>
            <div className={classes.row} onClick={_selectFile} style={{ backgroundColor: currentSelected ? 'lightgray' : 'initial' }}>
                <Avatar style={{ alignItems: 'center' }}>
                    <InsertDriveFile />
                </Avatar>
                <div>
                    <Typography variant='h6' className={classes.text}>
                        {file.name}
                    </Typography>
                    <Typography className={classes.text}>
                        {trasformDate(file.date)}
                    </Typography>
                </div>
                <EditAndDelete show={currentSelected} id={file._id} />
            </div>
        </>
    );
};

export default ListItem;