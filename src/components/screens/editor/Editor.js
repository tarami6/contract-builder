import React, { useState, useEffect } from 'react';
import { makeStyles, Collapse, Grow } from '@material-ui/core'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFileName, setDom, resetFile } from 'redux/actions'
import AddRowBtn from "./AddRowBtn"
import TopMainActions from "./topActions/TopMainActions"
import Body from './Body'

const useStyle = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#EFECEC',
        paddingTop: "76px",
    },
    topContainer: {
        height: "10vh",
        display: 'flex',
        justifyContent: 'space-between',
        padding: "20px ",
    },
    rootMainActions: {
        display: 'flex',

    },
    topConatinerSections: {
        width: '33%'
    }
})


const Editor = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const location = useLocation()
    const query = useParams();
    const fileId = query.id
    const files = useSelector(state => state.files.data)
    const currentFileArre = files?.filter(file => file._id === fileId)
   
    useEffect(() => {
        return () => dispatch(resetFile())
    }, [])

    useEffect(() => {
        let locationSrt = location.pathname.substring(0, 5)
        if(locationSrt === '/file' && currentFileArre.length){
            dispatch(setDom(currentFileArre[0]))
        }
    }, [location])

    const TopEditorActions = () => {
        return (
            <div className={classes.topContainer}>
                <div className={classes.topConatinerSections} style={{ display: "flex",
                    alignItems: "center",}}>
                    <AddRowBtn />
                </div>
                <div className={classes.topConatinerSections} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <TopMainActions />
                </div>
                {/* for space */}
                <div className={classes.topConatinerSections} /> 
            </div >
        )
    }

    return (
        <Grow in={true}>
            <div className={classes.root}>
                <TopEditorActions />
                <Body />
            </div >
        </Grow>
    );
};

export default Editor;