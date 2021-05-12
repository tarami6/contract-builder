import React from 'react'
import { setCurrentEditable } from 'redux/actions/actionsEditable'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RenderElement from './RenderElement'
import { uid } from 'uid'
import { ELEMENTTYPE } from 'redux/config/elementSchema'


const useStyles = props => makeStyles((theme) => ({
    root: {
        boxShadow: props.selected ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)" : 'none',
        '&:hover': {
            boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
        }
    },
    title: {
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#505b75',
        opacity: '0.3'
    },
    emptyContainer: {
        width: "100%",
        margin: "1px",
        padding: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8px",
    }
}))

const Column = ({ columnId }) => {
    const dispatch = useDispatch()
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _elementsIds = _column?.elements
    const editbale = useSelector(state => state.editable)
    const classes = useStyles({ selected: columnId === editbale.currentId })()

    const editColumn = (e) => {
        console.log('editColumn e', e)
        e.stopPropagation()
        if (editbale?.currentType === ELEMENTTYPE.wys && columnId === editbale.columnId) {
            return
        } else {
            dispatch(setCurrentEditable(_column))
        }
    }

    return (
        <Card
            className={classes.root}
            style={{ ..._column.style }}
            onClick={(e) => editColumn(e)}
        >
            {
                !_elementsIds.length && (
                    <div className={classes.emptyContainer}>
                        <Typography variant='h6' className={classes.title}>Clean Column</Typography>
                    </div>
                )
            }
            {_elementsIds?.map((elementId, index) => <RenderElement key={uid()} elementId={elementId} />)}
        </Card>
    )
}
export default Column