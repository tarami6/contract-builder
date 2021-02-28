import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFields, TextFormat} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    input: {
        width: '50px'
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

const ImgSize = ({onChange, show, width='', height=''}) => {
    const classes = useStyles();

    if (!show)
        return <></>
    return (
        <div className={classes.inputsContainer}>
            <div className={classes.iconContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='width'
                    onChange={onChange}
                    value={width}
                />
                <TextFields className={classes.icon} />
            </div>
            <div className={classes.iconContainer}>
                <input
                    className={classes.input}
                    type='number'
                    name='height'
                    onChange={onChange}
                    value={height}
                />
                <TextFormat className={classes.icon} />
            </div>
        </div>
    );
};

export default ImgSize;