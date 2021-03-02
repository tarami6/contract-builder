import React, { useEffect, useState } from 'react';
import {
  removeRow,
  removeColumn,
} from '../../redux/actions/actionsContractDom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Trash, XSquare } from 'react-bootstrap-icons';

const useStyle = makeStyles(() => ({
  root: { cursor: 'pointer' },
  icon: { width: 20, height: 20 },
}));

const RemoveElementBtn = ({ row, column, rowId, columnId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [deleteMode, setDeleteMode] = useState('Row');

  useEffect(() => {
    if (column) {
      setDeleteMode('Column');
    } else {
      setDeleteMode('Row');
    }
  }, [column, row]);

  const removeByRow = () => {
    return dispatch(removeRow(rowId));
  };

  const removeByColumn = () => {
    return dispatch(removeColumn(rowId, columnId));
  };

  const removeByMode = () => {
    if (deleteMode === 'Row') {
      removeByRow();
    } else if (deleteMode === 'Column') {
      removeByColumn();
    }
  };

  return (
    <div onClick={removeByMode} className={classes.root}>
      {deleteMode === 'Row' ? (
        <Trash className={classes.icon} />
      ) : (
        <XSquare className={classes.icon} />
      )}
    </div>
  );
};

export default RemoveElementBtn;
