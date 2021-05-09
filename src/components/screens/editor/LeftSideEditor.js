import React from 'react';
import { makeStyles, Card } from '@material-ui/core'
import Navigation from './editorNaviogation/Navigation'
import ElementsBoard from './ElementsBoard'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: '20%',
        margin: "0 20px",
        flexDirection: 'column'
    }
}))

const LeftSideEditor = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
           <Navigation />
           <ElementsBoard />
        </div>
    );
};

export default LeftSideEditor;