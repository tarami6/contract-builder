import React from 'react';
import { makeStyles } from '@material-ui/core'
import StyleEditor from './styleEditor/StyleEditor'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: '20%',
        margin: "0 20px",
        flexDirection: 'column'
    }
}))

const RightSideEditor = () => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <StyleEditor />
        </div>
    );
};

export default RightSideEditor;