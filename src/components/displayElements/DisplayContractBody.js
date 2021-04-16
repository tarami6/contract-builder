import React from 'react'
import RenderRow from '../common/RenderRow'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "rgb(255,255,255)",
        border: "1px solid lightgrey",
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px 5px'
    }
}))


const ContractBody = () => {
    const classes = useStyle()
    return (
        <Paper className={classes.root} elevation={1}>
            <RenderRow />
        </Paper >
    )
}

export default ContractBody


