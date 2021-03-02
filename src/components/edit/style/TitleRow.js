import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  input: {
    width: '50px',
  },
  inputsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '15px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    color: '#b9b9b9',
    margin: '015px',
    fontSize: '14px',
    fontWeight: '600',
  },
  iconArrow: {
    color: '#b9b9b9',
    fontSize: '14px',
    fontWeight: '600',
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
  row: {
    padding: '5px 10px',
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      background: '#2a3040',
      border: 'none',
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  text: {
    fontSize: '14px',
    margin: '0 15px',
    fontWeight: 600,
    color: '#b9b9b9',
  },
}));

const TitleRow = ({ title, onClick, opened }) => {
  const classes = useStyle();
  return (
    <div className={classes.row} onClick={onClick}>
      <div>
        <Typography variant='h6' className={classes.text}>
          {title}
        </Typography>
      </div>
      {opened ? (
        <KeyboardArrowDown className={classes.iconArrow} />
      ) : (
        <KeyboardArrowUp className={classes.iconArrow} />
      )}
    </div>
  );
};

export default TitleRow;
