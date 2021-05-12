import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import UserInfos from './UserInfos';
import EditName from './EditName'

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
    background: '#fff',
  },
  toolBar: {
    display: 'flex',
  },
  fileNameContainer: {
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div  className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
        <div className={classes.fileNameContainer}>
          <EditName />
        </div>
          <UserInfos />
        </Toolbar>
      </div>
    </div>
  );
};

export default AppBar;
