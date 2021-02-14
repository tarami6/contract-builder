import Rect, { useEffect, useState } from 'react'
import RemoveBtn from '../common/RemoveBtn'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import ELEMENTTYPE from '../common/moduleELementTypes'
import Text from './Text'
import Variable from './Variable'
import Image from './Image'
import { useSelector } from 'react-redux'

const RenderElementByType = ({ elementId }) => {
    const _type = useSelector(state => state.contractDom.elements[elementId].type)
    switch (_type) {
        case ELEMENTTYPE.text:
            return <Text elementId={elementId} />
        case ELEMENTTYPE.img:
            return <Image elementId={elementId} />
        case ELEMENTTYPE.variable:
            return <Variable elementId={elementId} />
        default:
            return <p>Element type not found</p>
    }
}

const Column = ({ columnId }) => {
    const _column = useSelector(state => state.contractDom.columns[columnId])
    const _elementsIds = _column?.elements 
    const _row = useSelector(state => state.contractDom.rows[_column?.rowId])
    const numOfColumnsInRow = _row?.numOfColumns
    useEffect(() => console.log('_column',_column), [_column])
    const [modalOpen, setModalOpen] = useState(true)

    return (
        <div 
        style={{
            minHeight: "6vh",
            width: "100%",
            height: "100%",
            border: "1px solid gray",
        }}>

            <div style={{
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0px 10px",
            }}>
                {
                    numOfColumnsInRow > 1 &&
                    <RemoveBtn  columnId={columnId} rowId={_row.id} column={true} />
                }
            </div>
            {_elementsIds?.map((elementId, index) => <RenderElementByType key={elementId} elementId={elementId} />)}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "inherit",
            }}>
                <button type='button' onClick={() => setModalOpen(!modalOpen)}>+</button>
            </div>
            <ModalAddElementToColumn open={modalOpen} columnId={columnId}  />
        </div>
    )
}
export default Column