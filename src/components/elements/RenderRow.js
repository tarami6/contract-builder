import React from "react";
import Row from './Row'

const RenderRow = ({children}) => {
    if (!children?.length)
        return <></>
    return children?.map((child, index) => <Row key={index} {...child}/> )
}


export default RenderRow
