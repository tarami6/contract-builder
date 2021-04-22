import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftSiteEditor from '../leftSideEditor/LeftSiteEditor'
import {useLocation} from 'react-router-dom'
import MainFilesList from 'components/files/MainFilesList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20%',
    background: '#333b4e',
    boxShadow: '0 0 3px 0 #212121',
    position: 'fixed',
    height: '100%'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    background: '#333b4e',
    overflow: 'hidden',
  },
  row: {
    padding: '5px 10px',
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 33,
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      background: '#2a3040',
      border: 'none'
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  arrow: {
    position: 'absolute',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '10px solid #333b4e',
    top: 64,
    left: '44%',
    zIndex: 9,
  },
  icon: {
    fontSize: '15px',
    color: '#b9b9b9',
  },
  text: {
    fontSize: '14px',
    margin: '0 15px',
    fontWeight: 600,
    color: '#b9b9b9',
  },
  title: {
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    background: '#505b75',
    position: 'relative',
    color: '#fff',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  dot: {
    display: 'flex',
    marginTop: 25,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    position: 'absolute',
    bottom: '100px'
  },
  btn: {
    margin: '0 10px',
    padding: '5px 60px',
    textTransform: 'capitalize',
    '&:last-child': {
      background: 'linear-gradient(90deg,#f66c43, #f24c58)',
      color: '#fff'
    }
  },
  btn2: {
    padding: '5px 75px',
    textTransform: 'capitalize',
    background: 'linear-gradient(90deg,#EB068C, #f24c58)',
    color: '#fff',
    margin: "20px 0",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation()
  
  const ByPath = () => {
    let locationSrt = location.pathname.substring(0, 5)
    if(locationSrt === '/file' || location.pathname === '/newFile') {
      return <LeftSiteEditor /> 
    } else {
      return <MainFilesList />
    }

  }
  return (
    <div className={classes.root} >
      <ByPath />
    </div>
  );
};

export default NavBar;