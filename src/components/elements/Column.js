import Rect, { useContext, useEffect, useState } from 'react'
import { HtmlContext } from '../../App'
import AddBtn from '../common/AddBtn'
import RemoveElementBtn from '../common/RemoveElementBtn'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import ELEMENTTYPE from '../common/moduleELementTypes'
import Text from './Text'
import Variable from './Variable'
import Image from './Image'

const getColumn = (context, id, rowId) => {
    const { html: { body: { children } } } = context
    const currentRow = children.find(row => row.id === rowId)
    const currentColumn = currentRow.children.find(column => column.id === id)
    return currentColumn
}

const getRow = (context, rowId) => {
    const { html: { body: { children } } } = context
    const currentRow = children.find(row => row.id === rowId)
    return currentRow
}

const RenderElementByType = ({ element }) => {
    const { type } = element
    switch (type) {
        case ELEMENTTYPE.text:
            return <Text element={element} />
        case ELEMENTTYPE.img:
            return <Image element={element} />
        case ELEMENTTYPE.variable:
            return <Variable element={element} />
        default:
            return <p>Element type not found</p>
    }
}

const Column = ({ id, rowId }) => {
    const context = useContext(HtmlContext)
    const _column = getColumn(context, id, rowId)
    const _children = _column.children
    const _row = getRow(context, rowId)
    const numOfColumnInRow = _row.numOfClomuns

    const [modalOpen, toggleModal] = useState(false)

    return (
        <div style={{
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
                    numOfColumnInRow > 1 &&
                    <RemoveElementBtn id={id} rowId={rowId} />
                }
            </div>
            {_children.map(element => <RenderElementByType key={element.id} element={element} />)}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "inherit",
            }}>
                <button type='button' onClick={() => toggleModal(!modalOpen)}>+</button>
            </div>
            <ModalAddElementToColumn open={modalOpen} rowId={rowId} columnId={id} />
        </div>
    )
}
export default Column