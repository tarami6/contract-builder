import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftSideBar from './leftSideBar/LeftSideBar';
import MainBuilder from './mainBuilder/MainBuilder'
import RightSideBar from './rightSideBar/RightSideBar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: '#2a3040',
  },
  content: {
    display: 'flex',
  },
}));

const EditScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <LeftSideBar />
        <MainBuilder />
        <RightSideBar />
      </div>
    </div>
  );
};

export default EditScreen;
