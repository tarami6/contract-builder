import React, { useContext, useEffect, useState } from 'react'
import { HtmlContext } from '../../App'

const RemoveElementBtn = ({ id, rowId }) => {
    const { html, setHtml } = useContext(HtmlContext)
    const vdom = { ...html }

    const [deleteMode, setDeleteMode] = useState('row')

    useEffect(() => {
        if(rowId){
            setDeleteMode('column')
        } 
    }, [rowId])

    const removeRow = () => {
        console.log('removeElement - id', id)
        let arrayWithoutRemoved = vdom.body.children.filter(item => item.id !== id)
        vdom.body.children = arrayWithoutRemoved
        setHtml(vdom)
    }

    const removeColumn = () => {
        const path = vdom.body.children
        const indexOfRow = path.findIndex(row => row.id === rowId)
        console.log('delete column', indexOfRow)
        vdom.body.children[indexOfRow].children = path[indexOfRow].children.filter( column => column.id !== id)
        vdom.body.children[indexOfRow].numOfClomuns = vdom.body.children[indexOfRow].children.length
        setHtml(vdom)
    }

    const removeByMode = () => {
        if(deleteMode === 'row') {
            removeRow()
        } else if (deleteMode === 'column') {
            removeColumn()
        }
    }

    return (
        <button onClick={removeByMode} style={{

        }}>
            Remove {deleteMode}
        </button>
    )
}

export default RemoveElementBtn