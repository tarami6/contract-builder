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
   
}))

const ChangeBorder = ({ onChange, value = 0 }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`borderWidth`}
                    onChange={onChange}
                    value={value}
                />
            </div>
            
        </div>
    );
};

export default ChangeBorder;