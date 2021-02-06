import React, { useContext } from "react";
import { uid } from 'uid'
import { HtmlContext } from '../../App'
import ELEMENTTYPE from './moduleELementTypes'

const text = (id) => ({
    id,
    type: 'text',
    style: {},
    content: 'this is text'
})

const img = (id) => ({
    id,
    type: 'img',
    style: {},
})

const addElement = (context, type, rowId, columnId) => {
    const { html, setHtml } = context
    let vdom = {...html}
    const path = vdom.body.children
    const indexOfRow = path.findIndex(row => row.id === rowId)
    const inedxOfColumn = path[indexOfRow].children.findIndex(column => column.id === columnId)
    
    switch (type) {
        case ELEMENTTYPE.text:
            const textId = uid()
            vdom.body.children[indexOfRow].children[inedxOfColumn].children.push(text(textId))
            break;
        case ELEMENTTYPE.img:
            const imgId = uid()
            vdom.body.children[indexOfRow].children[inedxOfColumn].children.push(img(imgId))
            break;
        default:
            break;
    }
    setHtml(vdom)
}


const ModalAddElementToColumn = ({ open, rowId, columnId }) => {
    const context = useContext(HtmlContext)

    if (!open)
        return <></>
    return (
        <div>
            <div onClick={() => addElement(context, ELEMENTTYPE.text, rowId, columnId)}>text</div>
            <div onClick={() => addElement(context, ELEMENTTYPE.img, rowId, columnId)}>img</div>
        </div>
    )
}



export default ModalAddElementToColumn
