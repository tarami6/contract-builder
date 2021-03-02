import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFields, TextFormat } from '@material-ui/icons';

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
}));

const Fonts = ({ onChange, sizeValue = '0', colorValue = '0', show }) => {
  const classes = useStyle();

  if (!show) return <></>;
  return (
    <div className={classes.inputsContainer}>
      <div className={classes.iconContainer}>
        <input
          className={classes.input}
          type='number'
          name='fontSize'
          onChange={onChange}
          value={sizeValue}
        />
        <TextFields className={classes.icon} />
      </div>
      <div className={classes.iconContainer}>
        <input
          className={classes.input}
          type='color'
          name='color'
          onChange={onChange}
          value={colorValue}
        />
        <TextFormat className={classes.icon} />
      </div>
    </div>
  );
};

export default Fonts;
