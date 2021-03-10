import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarMat from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {amdocsLogo} from '../../../assets'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '20%',
    background: '#eb028c',
    
  },
  toolBar:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px",
  }
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <AppBarMat position='static' className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <img src={amdocsLogo} width='100' height='50'/>
        </Toolbar>
      </AppBarMat>
  )
};

export default Logo;
