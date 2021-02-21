import React from "react";
import { useSelector } from 'react-redux'
import RemoveElementBtn from '../common/RemoveBtn'
import Column from '../elements/Column'
import { Card } from '@material-ui/core'

const Row = ({ rowId }) => {
    const { currentType, currentId } = useSelector(state => state.editable)
    const _row = useSelector(state => state.contractDom.rows[rowId])
    return (
        <Card
         style={{ width: _row.style.width, padding: '5px', marginTop: '2px' }}
         elevation={rowId === currentId ? 3 : 0}
          >
            {/* <div style={{
                minHeight: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0px 10px",
            }}>
                <RemoveElementBtn row rowId={rowId} />
                <RemoveElementBtn row rowId={rowId} />
            </div> */}

            <div
                style={{ ..._row.style }}
            >
                {_row.columns.map((columnId) => {
                    return <Column key={columnId} columnId={columnId} />
                })}
            </div>
        </Card>
    )
}

export default Row
