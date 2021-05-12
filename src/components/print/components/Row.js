import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import Column from './Column'
import {
    ELEMENTTYPE
} from "redux/config/elementSchema"
import { uid } from 'uid'

const Row = ({ row }) => {
    const _data = useSelector(state => state.varJson)
    const [dataToLoop, setDataToLoop] = useState(undefined)

    useEffect(() => {
        if (row?.loop) {
            if (_data.hasOwnProperty(row?.loop)) {
                setDataToLoop([..._data[row?.loop]])
            }
        }
    }, [row?.loop, _data])


    if (row.type === ELEMENTTYPE.rows) {

        if (dataToLoop) {
            return dataToLoop.map((item, index) => (
                <div style={{ ...row.style }}>
                    {row.columns.map((column, index) => {
                        if (column) {
                            return <Column key={uid()} column={column} />
                        } else {
                            return <div key={uid()} />
                        }
                    }
                    )}
                </div>
            ))
        }

        else {
            return (
                <div style={{ ...row.style }}>
                    {row.columns.map((column, index) => {
                        if (column) {
                            return <Column key={uid()} column={column} />
                        } else {
                            return <div key={uid()} />
                        }
                    }
                    )}
                </div>
            )
        }

    } else {
        return <></>
    }
}


export default Row