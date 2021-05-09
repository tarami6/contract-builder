import React from 'react';
import { makeStyles } from '@material-ui/core'
import { amdocsLogo } from 'assets'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.color.grey,
        flexDirection: 'column'
    }
}))
const MobileMessage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src={amdocsLogo} width='100' height='50' alt='Amdocs logo' />
            <p style={{
                fontSize: "30px",
                background: "-webkit-linear-gradient(#FBAA34, #EC008C)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                textAlign: 'center'
            }}>
                Please use the app from Desktop</p>
        </div>
    );
};

export default MobileMessage;