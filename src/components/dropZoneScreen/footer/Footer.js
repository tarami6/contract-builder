import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    padding: '15px 60px',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#2a3040',
  },
  items: {
    display: 'flex',
    alignItems: 'center',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: 30,
    height: 30,
    margin: 7,
    background: '#fff',
  },
  text: {
    marginRight: theme.spacing(2),
    fontSize: '14px',
    margin: '0 5px',
    color: '#b9b9b9',
    '&:first-child': {
      color: '#f1f1f1',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.items}>
        <Typography variant='h6' className={classes.text}>
          About
        </Typography>
        <Typography variant='h6' className={classes.text}>
          Blog
        </Typography>
        <Typography variant='h6' className={classes.text}>
          Terms
        </Typography>
        <Typography variant='h6' className={classes.text}>
          Privacy
        </Typography>
        <Typography variant='h6' className={classes.text}>
          Helps
        </Typography>
      </div>
      <div className={classes.socials}>
        <div className={classes.iconContainer}>
          <TwitterIcon />
        </div>
        <div className={classes.iconContainer}>
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
