import React, { useContext } from 'react'
import RenderRow from '../common/RenderRow'
import AddBtn from '../common/AddBtn'

const Body = () => {
    return (
        <div style={{
            width: "100%",
            backgroundColor: "rgb(255,255,255)",
            border: "1px solid lightgrey",
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <RenderRow />
            <AddBtn row/>
        </div>
    )
}

export default Body


