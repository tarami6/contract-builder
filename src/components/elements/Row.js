import React, { useContext } from "react";
import { HtmlContext } from '../../App'
import AddBtn from '../common/AddBtn'
import RemoveElementBtn from '../common/RemoveElementBtn'
import Column from '../elements/Column'

const Row = ({ id }) => {
    const context = useContext(HtmlContext)
    console.log('Rowcontext', context)
    const _row = context.html.body.children.find(row => row.id === id)

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
                <RemoveElementBtn id={id} />
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
                {_row.children.map(column => <Column key={column.id} id={column.id} rowId={_row.id} />)}
            </div>
        </div>
    )
}

export default Row
