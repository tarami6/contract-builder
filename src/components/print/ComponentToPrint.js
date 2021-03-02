import React from 'react';
import useContractVirtualDom from './customeHooks/useContractVirtualDom';

import Row from './components/Row';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: { padding: '15px' },
}));

const ComponentToPrint = React.forwardRef((_, ref) => {
  const classes = useStyle();
  const { rows } = useContractVirtualDom();
  return (
    <div ref={ref} className={classes.root}>
      {rows.map((row) => (
        <Row key={row.id} row={row} />
      ))}
    </div>
  );
});

export default ComponentToPrint;
