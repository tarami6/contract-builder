import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowUpward } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    input: {
        width: '50px'
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    iconContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    icon: {
        color: "#b9b9b9",
        margin: "015px",
        fontSize: "14px",
        fontWeight: "600",
    }
}))

const DynamicStyle = () => {
    const classes = useStyles();
    return (
        <div style={{ width: '20%', height: '100%', position: 'fixed', marginLeft: '80%', backgroundColor: '#2A3140' }}>
            <p style={{ color: '#b9b9b9' }}> Margin</p>
            <div className={classes.inputsContainer}>
                <div className={classes.iconContainer}>
                    <input className={classes.input} type='number' />
                    <ArrowUpward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input className={classes.input} type='number' />
                    <ArrowUpward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input className={classes.input} type='number' />
                    <ArrowUpward className={classes.icon} />
                </div>
                <div className={classes.iconContainer}>
                    <input className={classes.input} type='number' />
                    <ArrowUpward className={classes.icon} />
                </div>
            </div>

        </div>
    );
};

export default DynamicStyle;