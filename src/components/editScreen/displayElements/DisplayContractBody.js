import React, { useEffect } from 'react'
import RenderRow from './RenderRow'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFileName, setDom, resetFile } from 'redux/actions'
import { useLocation } from 'react-router-dom'

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
    const dispatch = useDispatch()
    const location = useLocation()
    const fileId = useSelector(state => state.files.selectedFile)
    const files = useSelector(state => state.files.data)
    const currentFileArre = files?.filter(file => file._id === fileId)

    useEffect(() => {
        return () => dispatch(resetFile())
    }, [])

    useEffect(() => {
        let locationSrt = location.pathname.substring(0, 5)
        if(location.pathname === '/newFile' ){
            dispatch(resetFile())
        }
        if(locationSrt === '/file' && currentFileArre.length){
            dispatch(setDom(currentFileArre[0]))
        }
    }, [location])

    return (
        <Paper className={classes.root} elevation={1}>
            <RenderRow />
        </Paper >
    )
}

export default ContractBody


