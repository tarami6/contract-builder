import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {  KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    
}))

const TitleRow = ({title}) => {
    const classes = useStyles();
    return (
        <div >
           <p>{title}</p>
        </div>
    );
};

export default TitleRow;