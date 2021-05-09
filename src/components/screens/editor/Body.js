import React from 'react';
import {makeStyles} from '@material-ui/core'
import LeftSideEditor from './LeftSideEditor'
import EditorDispaly from './EditorDispaly'
import RightSideEditor from './RightSideEditor'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
}))

const Body = () => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <LeftSideEditor />
            <EditorDispaly />
            <RightSideEditor />
        </div>
    );
};

export default Body;