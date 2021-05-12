import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { amdocsLogo } from '../../../assets'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '20%',
    background: '#fff',
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px",
  }
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <img src={amdocsLogo} width='100' height='50' alt='Amdocs logo'/>
      </Toolbar>
    </div>
  )
};

export default Logo;
