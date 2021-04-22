import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '80%',
    background: '#e9f0fa',
    flexDirection: 'column',
    zIndex: 1,
  },
  title: {
    width: '100%',
    height: '60px',
    background: '#e1e7f7',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
  },
  iconTextContainer: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '15px',
    color: '#a9b2c1',
  },
  text: {
    fontSize: '15px',
    marginLeft: '15px',
    color: '#a9b2c1',
  },
  content: {
    width: '100%',
    padding: '30px 30px 15px 30px',
  },
  dropZone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '322px',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='gray' stroke-width='4' stroke-dasharray='17' stroke-dashoffset='28' stroke-linecap='square'/%3e%3c/svg%3e")`,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: '0 10px',
    padding: '5px 60px',
    textTransform: 'capitalize',
    '&:last-child': {
      background: 'linear-gradient(90deg,#f66c43, #f24c58)',
      color: '#fff'
    }
  }
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <InfoIcon className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          Please, fill out your form with avalable fields
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.dropZone}>
          <div className={classes.iconTextContainer}>
            <PostAddOutlinedIcon
              className={classes.icon}
              style={{ fontSize: '80px' }}
            />
            <Typography
              variant='h6'
              className={classes.text}
              style={{ fontSize: '16px' }}
            >
              ADD FIELDS
            </Typography>
            <Typography variant='h6' className={classes.text}>
              Simple drag and drop
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.button}>
        <Button className={classes.btn} variant='outlined' startIcon={<VisibilityIcon />} >
          Preview mode
        </Button>
        <Button
          className={classes.btn}
        >
          Save this form
        </Button>
      </div>
    </div>
  );
};

export default Content;
