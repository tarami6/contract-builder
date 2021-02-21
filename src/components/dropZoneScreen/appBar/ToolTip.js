import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: 166,
    right: '-20px',
    background: '#333b4e',
    bottom: '-165px',
    borderRadius: 4,
    zIndex: 99,
    overflow: 'hidden',
  },
  row: {
    padding: 10,
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 33,
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
  },
}));

const ToolTip = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.arrow} />
      <div className={classes.item}>
        <div className={classes.row}>
          <PersonIcon className={classes.icon} />
          <Typography variant='h6' className={classes.text}>
            Account
          </Typography>
          <InfoIcon className={classes.icon} />
        </div>
        <div className={classes.row}>
          <AddCircleIcon  className={classes.icon} />
          <Typography variant='h6' className={classes.text}>
            Support
          </Typography>
        </div>
        <div className={classes.row}>
          <ExitToAppIcon  className={classes.icon} />
          <Typography variant='h6' className={classes.text}>
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
