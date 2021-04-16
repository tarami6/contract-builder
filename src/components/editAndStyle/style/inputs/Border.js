import React from 'react';
import { UnfoldMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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

const Border = ({ onChange, value, show }) => {
    const classes = useStyles();

    if(!show){
        return <></>
    }
    return (
        <div className={classes.inputsContainer}>
            <div className={classes.iconContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name={`borderWidth`}
                    onChange={onChange}
                    value={value}
                />
                <UnfoldMore className={classes.icon} />
            </div>
        </div>
    );
};

export default Border;