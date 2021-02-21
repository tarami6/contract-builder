import React from 'react'
import Column from './Column'

const Row = ({ row }) => {
    if (row.type === 'row') {
        return <div style={{  width: "100%",
        minHeight: "50px",
        display: "flex",
        alignItems: "flexStart",
        justifyContent: "space-around"}}>
            {row.columns.map((column, index) => {
                if (column) {
                    return <Column key={column.id} column={column} />
                } else {
                    return <div key={index} />
                }
            }
            )}
        </div>
    }
    return <></>
}


export default Row