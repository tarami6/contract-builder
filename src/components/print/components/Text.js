import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
  conatiner: (props) => props,
}));

const Text = ({ element }) => {
  const props = { ...element.style };
  const classes = useStyle(props);
  return (
    <div>
      <p className={classes.conatiner}>{element.content}</p>
    </div>
  );
};

export default Text;
