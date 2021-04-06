import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Typography } from '@material-ui/core'
import { ListAlt, CalendarViewDay, Code } from '@material-ui/icons'
import { toggleChooseImg } from '../../../../redux/actions/actionsModals'
import { removeColumn, addElement } from '../../../../redux/actions/actionsContractDom'
import { FileFont, FileImage, FileEarmarkMedical, PencilSquare } from 'react-bootstrap-icons'
import { ELEMENTTYPE } from '../../../../redux/config/elementSchema'

const useStyles = makeStyles((theme) => ({
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
            border: 'none'
        },
        '& > div': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    iconEditMode: {
        fontSize: '25px',
        color: '#333C4D',
    },
    textEditMode: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#333C4D',
    },
    icon: {
        fontSize: '25px',
        color: '#b9b9b9',
    },
    text: {
        fontSize: '14px',
        margin: '0 15px',
        fontWeight: 600,
        color: '#b9b9b9',
    },
}))

const getTitle = (type) => {
    const mainWord = 'Add'
    switch (type) {
        case ELEMENTTYPE.text:
            return `${mainWord} Text`
        case ELEMENTTYPE.wys:
            return `${mainWord} Content`
        case ELEMENTTYPE.img:
            return `${mainWord} Image`
        case ELEMENTTYPE.variable:
            return `${mainWord} Variable`
        case ELEMENTTYPE.signature:
            return `${mainWord} Signature`
        case ELEMENTTYPE.devider:
            return `${mainWord} Devider`
        case ELEMENTTYPE.code:
            return `${mainWord} Code`
        default:
            return ''
    }
}

const Icon = ({ type }) => {
    const { icon } = useStyles();
    const size = 20
    // const className = classes.icon

    switch (type) {
        case ELEMENTTYPE.text:
            return <FileFont width={size} height={size} className={icon} />
        case ELEMENTTYPE.wys:
            return <ListAlt width={size} height={size} className={icon} />
        case ELEMENTTYPE.img:
            return <FileImage width={size} height={size} className={icon} />
        case ELEMENTTYPE.variable:
            return <FileEarmarkMedical width={size} height={size} className={icon} />
        case ELEMENTTYPE.signature:
            return <PencilSquare width={size} height={size} className={icon} />
        case ELEMENTTYPE.devider:
            return <CalendarViewDay width={size} height={size} className={icon} />
        case ELEMENTTYPE.code:
            return <Code width={size} height={size} className={icon} />
        default:
            return <FileFont width={size} height={size} className={icon} />
    }
}

const AddElement = ({ addElementMode }) => {
    const classes = useStyles();
    const { currentId, columnId, rowId } = useSelector(state => state.editable)
    const dispatch = useDispatch()

    const _chooseImg = () => {
        dispatch(toggleChooseImg())
    }

    const _addElement = (type) => {
        dispatch(addElement(type, columnId, rowId))
    }

    const _handleClick = (type) => {
        type !== ELEMENTTYPE.img ? _addElement(type) : _chooseImg()
    }

    if (!addElementMode)
        return <></>
    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            {
                Object.keys(ELEMENTTYPE).map((type, index) => {
                    console.log('type', type)
                    if (type === 'rows' || type === 'columns') {
                        return <div key={index} />
                    }

                    return (
                        <div className={classes.row} key={index} onClick={() => _handleClick(type)} >
                            <div>
                                <Icon type={type} />
                                <Typography variant='h6' className={classes.text}>{getTitle(type)}</Typography>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AddElement;