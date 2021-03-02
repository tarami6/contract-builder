import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Report from '@material-ui/icons/Report';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  listItems: {
    display: 'flex',
  },
  itemContainer: {
    display: 'flex',
    padding: '0 20px',
    alignItems: 'center',
    borderLeft: '2px solid #ebf3ff',
    '&:first-child': {
      borderLeft: 'none',
    },
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
  },
  icon: {
    fontSize: '17px',
    color: '#97a1b1',
  },
  text: {
    fontSize: '16px',
    margin: '0 5px',
    color: '#97a1b1',
    fontWeight: 400,
  },
  forms: { color: '#2a2a2a' },
}));

const Menu = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.listItems}>
        <div className={classes.itemContainer}>
          <div className={classes.item}>
            <PermDeviceInformationIcon
              className={clsx(classes.icon, classes.forms)}
            />
            <Typography
              variant='h6'
              className={clsx(classes.text, classes.forms)}
            >
              Forms
            </Typography>
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.item}>
            <Report className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Reports
            </Typography>
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.item}>
            <SettingsIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Themes
            </Typography>
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.item}>
            <PeopleIcon className={classes.icon} />
            <Typography variant='h6' className={classes.text}>
              Users
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
