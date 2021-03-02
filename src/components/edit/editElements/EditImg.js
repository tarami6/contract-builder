import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import { setCurrentEditable } from '../../../redux/actions/actionsEditable';
import { removeElement } from '../../../redux/actions/actionsContractDom';
import {
  DeleteOutline,
  ExitToApp,
  SettingsApplications,
} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  row: {
    padding: '5px 10px',
    border: '1px solid #525661',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      background: '#2a3040',
      border: 'none',
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  icon: {
    fontSize: '25px',
    color: '#b9b9b9',
    width: 20,
    height: 20,
  },
  text: {
    fontSize: '14px',
    margin: '0 15px',
    fontWeight: 600,
    color: '#b9b9b9',
  },
}));

const EditImg = ({ id }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const { currentId, elementId, columnId } = useSelector(
    (state) => state.editable
  );
  const _currentElementId = id || currentId;
  const _currentEditable = currentId === elementId;
  const _element = useSelector(
    (state) => state.contractDom.elements[_currentElementId]
  );
  const _column = useSelector(
    (state) => state.contractDom.columns[_element.columnId]
  );
  const elementIndex = _column.elements.indexOf(_currentElementId) + 1;

  const onEdit = () => {
    dispatch(setCurrentEditable(_element));
  };

  const backToColumn = () => {
    dispatch(setCurrentEditable(_column));
  };

  const deleteElement = () => {
    dispatch(removeElement(_currentElementId, columnId));
    dispatch(setCurrentEditable(_column));
  };

  return (
    <div>
      <div className={classes.row} onClick={onEdit}>
        <div>
          <SettingsApplications className={classes.icon} />
          <Typography variant='h6' className={classes.text}>
            Image {elementIndex}
          </Typography>
        </div>
      </div>
      <div>
        {_currentEditable && (
          <>
            <div className={classes.row}>
              <div onClick={deleteElement}>
                <DeleteOutline className={classes.icon} />
              </div>
              <div onClick={backToColumn}>
                <Typography variant='h6' className={classes.text}>
                  Column
                </Typography>
                <ExitToApp className={classes.icon} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditImg;
