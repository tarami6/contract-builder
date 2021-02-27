import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    input: {
        width: '45px',
        fontSize: '12px'
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '15px'
    },
    iconContainer: {
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

const BoxSize = ({ onChange, valueTop = '0', valueBottom = '0', valueLeft = '0', valueRight = '0', show, sides, type = 'margin' }) => {
    const classes = useStyles();

    if (!show)
        return <></>
    return (
        <div className={classes.inputsContainer}>
            <div className={classes.iconContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Top`}
                    onChange={onChange}
                    value={valueTop}
                />
                <ArrowUpward className={classes.icon} />
            </div>
            <div className={classes.iconContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`${type}Bottom`}
                    onChange={onChange}
                    value={valueBottom}
                />
                <ArrowDownward className={classes.icon} />
            </div>
            {sides && (
                <>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name={`${type}Left`}
                            onChange={onChange}
                            value={valueLeft}
                        />
                        <ArrowBack className={classes.icon} />
                    </div>
                    <div className={classes.iconContainer}>
                        <input
                            className={classes.input}
                            type='number'
                            name={`${type}Right`}
                            onChange={onChange}
                            value={valueRight}
                        />
                        <ArrowForward className={classes.icon} />
                    </div>
                </>
            )
            }
        </div>
    );
};

export default BoxSize;