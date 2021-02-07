import React, { useState } from 'react'
import './App.css';
import Body from './components/elements/Body'
import ModalAddRow from './components/common/ModalAddRow'
import ModalAddElementToColumn from './components/common/ModalAddElementToColumn'
import ELEMENTTYPE from './components/common/moduleELementTypes'
import Test from './Test'
import { forEach } from 'lodash';

export const HtmlContext = React.createContext({});

function App() {
  const [html, setHtml] = useState({
    "body": {
      "type": "body",
      "style": {},
      "children": [
       
      ]
    }
  })

  const [modalOpenAddRow, toggleModalAddRow] = useState(false)

  const modalAddRowToggle = () => {
    console.log("modalToggle")
    toggleModalAddRow(!modalOpenAddRow)
  }

  const HtmlMirror = () => {
    if (html?.body?.type === 'body')
      return <Body />
    return <></>
  }

  const _handleChangeText = ({id, value}) => {
    const vdom = {...html}
      if (vdom.body?.children.length) {
        vdom.body?.children.forEach((row, rowIndex) => {
          if (row.children.length) {
            row.children.forEach((column, columnIndex) => {
              if (column.children.length) {
                column.children.forEach((element, elementIndex) => {
                  if (element.id === id) {
                    element.content = value
                  }
                })
              }
            })
          }
        })
      }
      setHtml(vdom)
  }

  const _handleChangeVariable = ({id, value}) => {
    const vdom = {...html}
      if (vdom.body?.children.length) {
        vdom.body?.children.forEach((row, rowIndex) => {
          if (row.children.length) {
            row.children.forEach((column, columnIndex) => {
              if (column.children.length) {
                column.children.forEach((element, elementIndex) => {
                  if (element.id === id) {
                    vdom.body.children[rowIndex].children[columnIndex].children[elementIndex] = {...element, ...value}
                  }
                })
              }
            })
          }
        })
      }
      setHtml(vdom)
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit html structure to server', html)
  }

  return (
    <HtmlContext.Provider
      value={{
        html,
        setHtml,
        modalOpenAddRow,
        modalAddRowToggle,
        handleChangeText: _handleChangeText,
        handleChangeVariable: _handleChangeVariable
      }}
    >
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

          {/* <Test /> */}
        </div>

      </div>
    </HtmlContext.Provider>
  );
}

export default App;
