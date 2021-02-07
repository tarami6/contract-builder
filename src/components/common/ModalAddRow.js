import React, {useContext} from "react";
import {uid, uis} from 'uid'
import {HtmlContext} from '../../App'

const ELEMENTTYPE = {
    row : 'row',
    text : 'text',
    grid : 'grid',
    img : 'img'
}

const row = (id, numOfClomuns) => ({
    id,
    type: 'row',
    style: {},
    numOfClomuns,
    children: []
})

const column = (id, rowId) => ({
    id,
    type: 'column',
    style: {},
    rowId,
    children: []
})

const text = (id) => ({
    id,
    type: 'text',
    style: {},
    content: 'this is text'
})

const grid = (id) => ({
    id,
    type: 'grid',
    style: {},
    children: []
})

const img = (id) => ({
    id,
    type: 'img',
    style: {},
})

const addRow = (context,numOfColumns) => {
    const {html, setHtml} = context
    const vdom = {...html?.body}
    const rowId = uid()
    console.log('addRow', vdom.children)
    const createdRow = row(rowId, numOfColumns)

    if (numOfColumns === 2) {
        const columnId = uid() 
        const columnTwoId = uid() 
        const createdColumn = column(columnId, rowId)
        const createdColumnTwo = column(columnTwoId, rowId)
        
        createdRow.children.push({...createdColumn}, {...createdColumnTwo})
    } else {
        const columnId = uid()
        const createdColumn = column(columnId, rowId)
        createdRow.children.push({...createdColumn})
    }

    
    vdom.children.push(createdRow)
    setHtml({body:{...vdom}})
}


const ModalAddRow= () => {
    const context  = useContext(HtmlContext)
    const {modalOpenAddRow} = context

    if(!modalOpenAddRow)
        return <></>
    return (
        <div>
            <div >
                <div onClick={() => addRow(context, 1)}>One Column</div> 
                <div onClick={() => addRow(context, 2)}>Two Column</div> 
            </div>
            {/* <div onClick={() => addElement(context,ELEMENTTYPE.text)}>text</div>
            <div onClick={() => addElement(context,ELEMENTTYPE.grid)}>grid</div>
            <div onClick={() => addElement(context,ELEMENTTYPE.img)}>img</div> */}
        </div>
    )
}



export default ModalAddRow
