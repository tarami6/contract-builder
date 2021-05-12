import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Build } from '@material-ui/icons';
import ToolTip from './ToolTip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '25%',
    justifyContent: 'flex-end'
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
          <Build style={{ color: '#666' }} onClick={handleTooltipOpen} />
          {open && <ToolTip />}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default UserInfos;
