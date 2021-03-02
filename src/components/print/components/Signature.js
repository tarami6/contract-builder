import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = (theme) => ({
  root: (props) => ({
    padding: '3px',
    width: 'fit-content',
    ...props,
  }),
  text: {fontSize: '150%'},
  content: { width: '160px', height: '80px', border: '1px solid' }
});

const Signature = ({ element }) => {
  const props = {
    marginTop: element.style.marginTop,
    marginBottom: element.style.marginBottom,
    marginLeft: element.style.marginLeft,
    marginRight: element.style.marginRight,
    paddingTop: element.style.paddingTop,
    paddingBottom: element.style.paddingBottom,
    paddingLeft: element.style.paddingLeft,
    paddingRight: element.style.paddingRight,
  };
  const classes = useStyle(props);
  return (
    <div
      className={classes.root}
    >
      <p className={classes.text} >Signature</p>
      <div className={classes.content}  />
    </div>
  );
};

export default Signature;
