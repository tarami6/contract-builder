import React from 'react'
import Column from './Column'
import {
    ELEMENTTYPE
} from "../../../redux/config/elementSchema"
const Row = ({ row }) => {
    if (row.type === ELEMENTTYPE.rows) {
        return <div style={{  ...row.style }}>
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