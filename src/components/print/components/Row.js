import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Column from './Column'
import {
    ELEMENTTYPE
} from "../../../redux/config/elementSchema"
const Row = ({ row }) => {
    const _data = useSelector(state => state.varJson)
    const [dataToLoop, setDataToLoop] = useState(undefined)

    useEffect(() => {
        if (row?.loop) {
            if (_data.hasOwnProperty(row?.loop)) {
                setDataToLoop([..._data[row?.loop]])
            }
        }
    }, [row?.loop])


    if (row.type === ELEMENTTYPE.rows) {
        if (dataToLoop) {

            return dataToLoop.map((item, index) => (
                <div style={{ ...row.style }}>
                    {row.columns.map((column, index) => {
                        if (column) {
                            return <Column key={column.id} column={column} />
                        } else {
                            return <div key={index} />
                        }
                    }
                    )}
                </div>
            ))
        }


        return <div style={{ ...row.style }}>
            {row.columns.map((column, index) => {
                if (column) {
                    return <Column key={column.id} column={column} />
                } else {
                    return <div key={index} />
                }
            }
            )}
        </div>
    } else {
        return <></>
    }
}


export default Row