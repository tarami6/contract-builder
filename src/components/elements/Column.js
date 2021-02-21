import { useEffect, useState } from 'react'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import RemoveBtn from '../common/RemoveBtn'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import { useDispatch, useSelector } from 'react-redux'
import { PlusCircle } from 'react-bootstrap-icons'
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
    }
}))

const Column = ({ columnId }) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _elementsIds = _column?.elements
    const _row = useSelector(state => state.contractDom.rows[_column?.rowId])
    const { currentType, currentId, rowId } = useSelector(state => state.editable)
    const [modalOpen, setModalOpen] = useState(false)

    const editColumn = (e) => {
        dispatch(setCurrentEditable(_column))
    }

    return (
        <Card
            style={{ ..._column.style, padding: '5px', margin: '1px' }}
            elevation={columnId === currentId ? 3 : 0}
            onClick={editColumn}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0px 10px",
            }}>
            </div>
            {
                !_elementsIds.length && (
                    <Typography variant='h6' className={classes.title}>Clean Column</Typography>
                )
            }
            {_elementsIds?.map((elementId, index) => <RenderElement key={elementId} elementId={elementId} />)}
            <ModalAddElementToColumn open={modalOpen} rowId={_row.id} columnId={columnId} onClick={() => setModalOpen(!modalOpen)} />
        </Card>
    )
}
export default Column