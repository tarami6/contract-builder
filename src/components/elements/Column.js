import { useState } from 'react'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import RenderElement from '../common/RenderElement'

const useStyle = makeStyles((theme) => ({
    title: {
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#505b75',
        opacity: '0.1'
    },
    emptyContainer: {
        width: "100%",
        minHeight: "50px",
        margin: "1px",
        padding: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}))

const Column = ({ columnId }) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _elementsIds = _column?.elements
    const _row = useSelector(state => state.contractDom.rows[_column?.rowId])
    const { currentId } = useSelector(state => state.editable)
    const [modalOpen, setModalOpen] = useState(false)
    const [hover, setHover] = useState(false)

    const editColumn = (e) => {
        e.stopPropagation()
        dispatch(setCurrentEditable(_column))
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
            style={{ ..._column.style }}
            onClick={editColumn}
            elevation={(columnId === currentId || hover) ? 3 : 0}
            onMouseOver={onEnter}
            onMouseOut={onLeave}
        >
            {
                !_elementsIds.length && (
                    <div className={classes.emptyContainer}>
                        <Typography variant='h6' className={classes.title}>Clean Column</Typography>
                    </div>
                )
            }
            {_elementsIds?.map((elementId, index) => <RenderElement key={elementId} elementId={elementId} />)}
            <ModalAddElementToColumn open={modalOpen} rowId={_row.id} columnId={columnId} onClick={() => setModalOpen(!modalOpen)} />
        </Card>
    )
}
export default Column