import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, Badge } from '@material-ui/core';
import Image from '../../../assets/img.jpg';
import ToolTip from './ToolTip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  itemContainer: {
    display: 'flex',
    padding: '0 20px',
    alignItems: 'center',
    borderLeft: '2px solid white',
  },
  item: {
    display: 'flex',
    cursor: 'pointer',
  },
  avatar: {
    marginLeft: 25,
  },
  text: {
    fontSize: '1rem',
    margin: '0 5px',
    cursor: 'pointer',
    color: '#666',
  },
}));

const UserInfos = () => {
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div className={classes.row}>
          <Typography
            variant='h6'
            className={classes.text}
            onClick={handleTooltipOpen}
          >
            Lorem ipsum
          </Typography>
          <ArrowDropDownIcon style={{ color: '#666' }} />
          {open && <ToolTip />}
          <div className={classes.avatar}>
            <Badge color='secondary' overlap='circle' badgeContent={1}>
              <Avatar alt='Remy Sharp' src={Image} className={classes.large} />
            </Badge>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default UserInfos;
