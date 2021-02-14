import React, { useContext } from "react";
import { HtmlContext } from '../../App'
import { useSelector } from 'react-redux'
import AddBtn from '../common/AddBtn'
import RemoveElementBtn from '../common/RemoveBtn'
import Column from '../elements/Column'

const Row = ({ rowId }) => {
    const _row = useSelector(state => state.contractDom.rows[rowId])
    console.log('_row', _row)
    return (
        <div style={{
            width: "100%",
            minHeight: "50px",
            backgroundColor: "lightblue",
            border: "1px solid gray",
        }}>
            <div style={{
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0px 10px",}}>
                <RemoveElementBtn row rowId={rowId} />
            </div>

            <div
                style={{
                    width: "100%",
                    minHeight: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid gray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}
            >
                {_row.columns.map((columnId ) =>{
                    console.log('columnId',columnId)

return <Column key={columnId} columnId={columnId}/>
                } )}
            </div>
        </div>
    )
}

export default Row
