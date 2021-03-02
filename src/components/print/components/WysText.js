import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: (props) => props,
}));

const WysText = ({ element }) => {
  const props = { ...element.style };
  const classes = useStyle(props);
  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: element?.content }}
    ></div>
  );
};

export default WysText;
