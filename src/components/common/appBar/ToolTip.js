import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/actions/actionAuth'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: 166,
    right: 0,
    background: '#333b4e',
    bottom: -53,
    borderRadius: 4,
    zIndex: 99,
    overflow: 'hidden',
  },
  row: {
    padding: '5px 10px',
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    cursor: 'pointer',
    '&:hover': {
      background: '#2a3040',
      border: 'none'
    }
  },
  arrow: {
    position: 'absolute',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '10px solid #333b4e',
    top: 65,
    left: '60%',
    zIndex: 9999,
  },
  icon: {
    fontSize: '15px',
  },
  text: {
    fontSize: '14px',
    margin: '0 15px',
    fontWeight: 600,
    color: 'white'
  },
}));

const ToolTip = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const _logOut = () => {
    dispatch(logOut())
  }
  
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <div className={classes.row} onClick={_logOut}>
          <ExitToAppIcon className={classes.icon} />
          <Typography variant='h6' className={classes.text}>
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
