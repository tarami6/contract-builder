import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  title: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    background: '#505b75',
    position: 'relative',
    color: '#fff',
  },
}));

const TitleBox = ({ title }) => {
  const classes = useStyle();
  return (
    <div className={classes.title}>
      <Typography variant='h6' className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

export default TitleBox;
