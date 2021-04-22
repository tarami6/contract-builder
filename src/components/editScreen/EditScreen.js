import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './navBar/NavBar';
import MainBuilder from './mainBuilder/MainBuilder'
import DynamicStyle from './editAndStyle/style/DynamicStyle'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: '#2a3040',
  },
  content: {
    display: 'flex',
  },
  topBar: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '76px',
    zIndex: 2,
  },
  footer: {
    height: '10%'
  },
  appBar: {
    padding: '0 15',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const EditScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <NavBar />
        <MainBuilder />
        <DynamicStyle />
      </div>
    </div>
  );
};

export default EditScreen;
