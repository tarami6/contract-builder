import React from 'react'
import Column from './Column'
import {
    ELEMENTTYPE
} from "../../../redux/config/elementSchema"
import {makeStyles} from '@material-ui/styles'

const useStyle = ((theme)=> ({
    root: props => (props)
}))

const Row = ({ row }) => {
    const props = {  ...row.style }
    const classes = useStyle(props)

    if (row.type === ELEMENTTYPE.rows) {
        return <div className={classes.root}>
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
