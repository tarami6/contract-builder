import Rect, { useEffect, useState } from 'react'
import RemoveBtn from '../common/RemoveBtn'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import { useSelector } from 'react-redux'
import { PlusCircle } from 'react-bootstrap-icons'

import RenderElement from '../common/RenderElement'



const Column = ({ columnId }) => {
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _elementsIds = _column?.elements
    const _row = useSelector(state => state.contractDom.rows[_column?.rowId])
    const numOfColumnsInRow = _row?.numOfColumns
    useEffect(() => console.log('_column', _column), [_column])
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div
            style={{
                minHeight: "40px",
                width: "100%",
                height: "100%",
            }}>

            <div style={{
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0px 10px",
            }}>
                <div onClick={() => setModalOpen(!modalOpen)}><PlusCircle width='20' height='20' style={{ color: '#FF5C04', marginRight: '15px' }} /> </div>
                {
                    numOfColumnsInRow > 1 &&
                    <RemoveBtn columnId={columnId} rowId={_row.id} column={true} />
                }
            </div>
            {_elementsIds?.map((elementId, index) => <RenderElement key={elementId} elementId={elementId} />)}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "inherit",
            }}>
            </div>
            <ModalAddElementToColumn open={modalOpen} columnId={columnId} onClick={() => setModalOpen(!modalOpen)} />
        </div>
    )
}
export default Column