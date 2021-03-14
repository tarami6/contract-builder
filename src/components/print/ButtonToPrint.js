import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint'
import { Button } from '@material-ui/core';
import { Visibility as VisibilityIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOMServer from 'react-dom/server';

const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '5px 55px',
        backgroundColor: '#192233',
        textTransform: 'capitalize',
        boxShadow: '2px 2px 2px -2px black',
        '&:last-child': {
            background: 'linear-gradient(90deg,#f66c43, #f24c58)',
            color: '#fff'
        },
        color: 'lightGrey'
    }
}))

const ButtonToPrint = () => {
    const classes = useStyles();
    const componentRef = useRef();
    return (
        <div>
            <ReactToPrint
                trigger={() => <Button className={classes.btn} variant='outlined' startIcon={<VisibilityIcon />} > Print Preview</Button>}
                content={() => componentRef.current}
            />
            <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    )
}

export default ButtonToPrint