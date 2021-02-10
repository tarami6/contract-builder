import React, { useRef } from 'react'
import './App.css';
import Body from './components/elements/Body'
import ModalAddRow from './components/common/ModalAddRow'
import ModalAddElementToColumn from './components/common/ModalAddElementToColumn'

import ButtonToPrint from './components/print/ButtonToPrint'




function App() {


  const HtmlMirror = () => {
    return <Body />
  }


  const _handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit html structure to server')
  }

  return (
    <div style={{
      width: '100 %',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    >
      <p>Contract builder</p>
      <div style={{
        width: "80%",
        minHeight: "100vh",
        backgroundColor: '#fff'
      }}>
        <form onSubmit={_handleSubmit}>
          <HtmlMirror />
          <button type="submit">Save</button>
        </form>
        <ModalAddRow />
        <ModalAddElementToColumn />
        <ButtonToPrint />
        {/* <Test /> */}
      </div>

    </div>
  );
}

export default App;
