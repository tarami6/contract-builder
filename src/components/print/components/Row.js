import React from 'react'
import Column from './Component'

const Row = ({ row }) => {
    if (row.type === 'row') {
        return <div style={{ minHeight: '80px', display: "flex" }}>
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