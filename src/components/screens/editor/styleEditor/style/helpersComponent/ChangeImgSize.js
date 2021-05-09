import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "space-evenly",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
    },
    input: {
        ...theme.styleInput,
    },
    label: {
        fontSize: '12px'
    }
}))


const ChangeImgSize = ({ onChange, width = '', height = '' }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='height'
                    onChange={onChange}
                    value={height}
                />
                <p className={classes.label} >Height</p>
            </div>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='width'
                    onChange={onChange}
                    value={width}
                />
                <p className={classes.label} >Width</p>
            </div>
        </div>
    );
};

export default ChangeImgSize; 