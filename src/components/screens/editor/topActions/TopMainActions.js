import React, { useState } from 'react';
import { makeStyles, useTheme, Card } from '@material-ui/core'
import { DeveloperMode } from '@material-ui/icons'
import Save from './btn/Save'
import Back from './btn/Back'
import Print from './btn/Print'
import ShowHtml from './btn/ShowHtml'
import EditJson from './btn/EditJson'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "25px",
        width: "300px",
        backgroundColor: '#fff',
        padding: "5px",
    },
    btn: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderRadius: '100%'
    },
    backBtn: {
        width: "80px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: '20px'
    },
    svgIcon: {
        fontSize: "20px",
        color: '#FfF'
    }
}))

const TopMainActions = () => {
    const classes = useStyle()
    const theme = useTheme()

    return (
        <Card className={classes.root} elevation={3}>
            <Back />
            <Save />
            <Print />
            <ShowHtml />
            <EditJson />
        </Card>
    );
};

export default TopMainActions;