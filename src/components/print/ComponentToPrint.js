import React from 'react'
import { useSelector } from 'react-redux'

const ComponentToPrint = React.forwardRef((props, ref) => {
  const text = useSelector(state => state.contractDom.elements, () => {})
  console.log('text', text)
  let first = Object.keys(text)
  let content = text[first[0]]?.content ?? 'hello'
  return (
  <div ref={ref} >
    <p>{content}</p>
  </div>
  )
});


export default ComponentToPrint