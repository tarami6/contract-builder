import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Paper } from '@material-ui/core';
import useVirtualDom from './customeHooks/useVirtualDom' 
import Row from '../print/components/Row'

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "rgb(255,255,255)",
        border: "1px solid lightgrey",
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 5px'
    }
}))

const DisplayMain = () => {
    const classes = useStyle()
    const fileId = useSelector(state => state.files.selectedFile)
    const files = useSelector(state => state.files.data)
    const file = files?.filter(file => file._id === fileId)[0]
    const dom = file?.dom
    const { rows } = useVirtualDom(dom)
    
    return (
        <Paper className={classes.root} elevation={1}>
            {rows.map((row, index) => <Row key={index} row={row} />)}
        </Paper>
    );
};

export default DisplayMain;