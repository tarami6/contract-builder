import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { VARIABLETYPES } from '../../redux/config/elementSchema'
import { removeElement, editElementVariable } from '../../redux/actions/actionsContractDom'
import { CheckCircle, XCircle, Trash2 } from 'react-bootstrap-icons'
import { Card } from '@material-ui/core'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: { padding: '3px', width: 'fit-content', margin: '2px' },
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
    '&:last-child': {
      width: 22,
      height: 22,
    },
  },
}));


const Variable = ({ elementId }) => {
    const dispatch = useDispatch()
    const _variable = useSelector(state => state.contractDom.elements[elementId])
    const { currentId } = useSelector(state => state.editable)
    const [editMode, setEditMode] = useState(false)
    const [selectValues, setSelectValues] = useState([])
    const [hover, setHover] = useState(false)
    const [inputsValues, setValue] = useState({
        title: _variable.title,
        key: _variable.key,
        value: _variable.value
    })
    const classes = useStyle()

    useEffect(() => {
        const selectValuesToArr = Object.keys(VARIABLETYPES)
        setSelectValues([...selectValuesToArr])
    }, [])

    const _handelChangeTitle = (e) => {
        e.preventDefault()
        const newObj = { ...inputsValues }
        newObj.title = e.target.value
        setValue({ ...newObj })
    }


    const _handelChangeKey = (e) => {
        e.stopPropagation()
        e.preventDefault()
        let newObj = { ...inputsValues }
        newObj = { ...inputsValues, key: e.target.value }
        setValue({ ...newObj })
    }

    const _handleSave = () => {
        if (!inputsValues.title.length) {
            return alert('text cant be empty')
        }
        dispatch(editElementVariable(_variable.id, inputsValues))
        setEditMode(!editMode)
    }

    const _handleDoubleClick = () => {
        if (!editMode) {
            setEditMode(!editMode)
        }
    }

    const _close = () => {
        if (editMode) {
            setEditMode(!editMode)
        }
    }

    const _delete = () => {
        dispatch(removeElement(_variable.id, _variable.columnId))
    }

    const editElement = (e) => {
        e.stopPropagation()
        if (_variable.id !== currentId)
            dispatch(setCurrentEditable(_variable))
    }

    const onLeave = (e) => {
        e.stopPropagation()
        setHover(false)
    }

    const onEnter = (e) => {
        e.stopPropagation()
        setHover(true)
    }

    return (
        <Card
            onClick={editElement}
            onDoubleClick={_handleDoubleClick}
            className={classes.card}
            elevation={(elementId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {
                editMode ?
                    <div>
                        <input name={_variable.id} onChange={_handelChangeTitle} placeholder={inputsValues.title} value={inputsValues.title} />
                        <div className={classes.content}>
                            <select onChange={_handelChangeKey} value={inputsValues.key} >
                                {selectValues.map(option => <option key={Math.random() * 1000} >{option}</option>)}
                            </select>
                            <div onClick={_handleSave} className={classes.iconContainer}><CheckCircle className={classes.icon} /></div>
                            <div onClick={_close} className={classes.iconContainer}><XCircle className={classes.icon} /></div>
                            <div onClick={_delete} className={classes.iconContainer}><Trash2 className={classes.icon} /></div>
                        </div>
                    </div>
                    : (
                        <div className={classes.content}>
                            <p style={{ ..._variable.style.title }} >{_variable.title}</p>
                            <p style={{ ..._variable.style.key }}>{_variable.key}</p>
                        </div>
                    )
            }
        </Card>
    );
};

export default Variable;
