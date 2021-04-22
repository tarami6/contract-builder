import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import NewFile from './NewFile'
import EditName from './EditName'

const useStyles = makeStyles((theme) => ({
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
    borderLeft: '2px solid white',
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
    fontWeight: 400
  },
}));

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div className={classes.listItems}>
        <div className={classes.itemContainer} style={{ borderLeft: 'none' }}>
          <div className={classes.item}
            onClick={() => history.push('/')}
          >
            <List
              className={classes.icon}
              style={{ color: '#2a2a2a' }}
            />
            <Typography
              variant='h6'
              className={classes.text}
              style={{ color: '#2a2a2a' }}
            >
              All Files
            </Typography>
          </div>
        </div>
        <NewFile />
        <EditName />
      </div>
    </div>
  );
};

export default Menu;
