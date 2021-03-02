import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';
import { Button } from '@material-ui/core';
import { Visibility as VisibilityIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  btn: {
    margin: '20px 0px',
    padding: '5px 55px',
    backgroundColor: '#192233',
    textTransform: 'capitalize',
    boxShadow: '2px 2px 2px -2px black',
    '&:last-child': {
      background: 'linear-gradient(90deg,#f66c43, #f24c58)',
      color: '#fff',
    },
    color: 'lightGrey',
  },
  hidde: { display: 'none' },
}));

const ButtonToPrint = () => {
  const classes = useStyle();
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button
            className={classes.btn}
            variant='outlined'
            startIcon={<VisibilityIcon />}
          >
            {' '}
            Print Preview
          </Button>
        )}
        content={() => componentRef.current}
      />
      <div className={classes.hidde}>
        <ComponentToPrint ref={componentRef} />
      </div>
    </div>
  );
};

export default ButtonToPrint;
