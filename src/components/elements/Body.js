import React, { useContext } from 'react'
import RenderRow from './RenderRow'
import AddBtn from '../common/AddBtn'
import {HtmlContext} from '../../App'

const Body = () => {
    const context = useContext(HtmlContext);
    const children = context?.html?.body?.children
    return (
        <div style={{
            width: "100%",
            backgroundColor: "rgb(255,255,255)",
            border: "1px solid lightgrey",
            minHeight: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <RenderRow children={children}/>
            <AddBtn row/>
        </div>
    )
}

export default Body


