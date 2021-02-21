import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarMat from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from './Menu';
import UserInfos from './UserInfos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    padding: '6px 18px',
    background: '#fafafa',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarMat position='static' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Menu />
          <UserInfos />
        </Toolbar>
      </AppBarMat>
    </div>
  );
};

export default AppBar;
