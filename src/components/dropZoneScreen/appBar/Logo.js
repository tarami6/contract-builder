import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarMat from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '20%',
    background: '#f24c58'
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <AppBarMat position='static' className={classes.root}>
        <Toolbar className={classes.toolBar}>
        </Toolbar>
      </AppBarMat>
  )
};

export default Logo;
