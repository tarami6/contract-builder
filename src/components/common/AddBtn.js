import React, {useContext} from "react";
import {HtmlContext} from '../../App'

const AddBtn = ({row, element}) => {
    const {modalAddRowToggle, modalAddElementToColumnToggle} = useContext(HtmlContext)
    const addByMode = () => {
        if(row) {
            modalAddRowToggle()
        } else if(element){
            modalAddElementToColumnToggle()
        } else {
            console.log('no Mode on addBtn')
        }
    } 

    return (
        <button onClick={addByMode} id={'123'}>
            +
        </button>
    )
}

export default AddBtn
