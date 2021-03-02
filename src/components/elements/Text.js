import React, { useState } from 'react';
import { editElementText } from '../../redux/actions/actionsContractDom';
import { useSelector, useDispatch } from 'react-redux';
import { CheckCircle, XCircle } from 'react-bootstrap-icons';
import { Card } from '@material-ui/core';
import { setCurrentEditable } from '../../redux/actions/actionsEditable';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: (props) => ({
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    fontSize: '',
    ...props,
  }),
  iconContainer: { display: 'flex' },
  content: {
    width: '160px',
    height: '80px',
    border: '2px solid',
  },
  inputValue: {
    margin: '0',
    fontSize: (props) => props.fontSize,
    color: (props) => props.style.color,
  },
  iconContent: { margin: '0 5px' },
  icon: {
    width: 20,
    height: 20,
  },
}));

const Text = ({ elementId }) => {
  const dispatch = useDispatch();
  const _element = useSelector(
    (state) => state.contractDom.elements[elementId]
  );
  const { currentId } = useSelector((state) => state.editable);
  const [editMode, setEditMode] = useState(false);
  const [hover, setHover] = useState(false);
  const [inputValue, setValue] = useState(_element.content);
  const props = { ..._element.style };

  const classes = useStyle(props);

  const _handelChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const _handleSave = () => {
    if (!inputValue.length) {
      return alert('text cant be empty');
    }
    dispatch(editElementText(elementId, inputValue));
    setEditMode(!editMode);
  };

  const _handleDoubleClick = () => {
    if (!editMode) {
      setEditMode(!editMode);
    }
  };

  const _close = () => {
    if (editMode) {
      setEditMode(!editMode);
    }
  };

  const editElement = (e) => {
    e.stopPropagation();
    dispatch(setCurrentEditable(_element));
  };

  const onLeave = (e) => {
    e.stopPropagation();
    setHover(false);
  };

  const onEnter = (e) => {
    e.stopPropagation();
    setHover(true);
  };

  return (
    <Card
      onClick={editElement}
      onDoubleClick={_handleDoubleClick}
      className={classes.card}
      elevation={elementId === currentId || hover ? 3 : 0}
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      {editMode ? (
        <div className={classes.content}>
          <input
            name={_element.id}
            onChange={_handelChange}
            placeholder={_element.content}
            value={inputValue}
          />
          <div onClick={_handleSave} className={classes.iconContainer}>
            <CheckCircle className={classes.icon} />
          </div>
          <div onClick={_close} className={classes.iconContainer}>
            <XCircle className={classes.icon} />
          </div>
        </div>
      ) : (
        <p
          classname={classes.inputValue}>
          {inputValue}
        </p>
      )}
    </Card>
  );
};

export default Text;
