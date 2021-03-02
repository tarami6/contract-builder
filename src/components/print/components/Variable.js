import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: { display: 'flex', alignItems: 'flex-end' },
  conatiner: (props) => props,
  span: { width: '50px', height: '1px', borderBottom: '1px solid black' },
  title: (props) => props.title,
  key: (props) => props.key,
}));

const Variable = ({ element }) => {
  const props = {
    title: { ...element.style.title },
    key: { ...element.style.key },
  };
  const classes = useStyle(props);
  const valueIt = () => {
    switch (element.key) {
      case 'empty':
        return <span />;
      case 'userName':
        return 'Csr Agent';
      case 'fullName':
        return 'Estban Fernandez Gonzles';
      case 'address':
        return 'Estaka Mabini, street - Dondla, zip - 123342,  Philiphine';
      case 'accountBalance':
        return 'PHP 234.556';
      case 'paymentNow':
        return 'PHP 1000';
      case 'product':
        return 'Iphone 12 Black 128 Giga';
      case 'storeName':
        return 'Super Phones';
      case 'agentName':
        return 'Philipe Lopez';
      case 'phone':
        return '0542291101';
      default:
        return '';
    }
  };

  return (
    <div className={classes.root}>
      <p className={classes.title}>{element.title}</p>
      <p className={classes.key}>{valueIt()}</p>
    </div>
  );
};

export default Variable;
