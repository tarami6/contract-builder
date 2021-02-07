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
        {
          "id": "4717cc6e251",
          "type": "row",
          "style": {},
          "numOfClomuns": 2,
          "children": [
            {
              "id": "717cc6e251d",
              "type": "column",
              "style": {},
              "rowId": "4717cc6e251",
              "children": [
                {
                  "id": "7cc6e251d92",
                  "type": "text",
                  "style": {},
                  "content": "this is text"
                }
              ]
            },
            {
              "id": "17cc6e251d9",
              "type": "column",
              "style": {},
              "rowId": "4717cc6e251",
              "children": [
                {
                  "id": "cc6e251d924",
                  "type": "text",
                  "style": {},
                  "content": "this is text"
                }
              ]
            }
          ]
        },
        {
          "id": "c6e251d9246",
          "type": "row",
          "style": {},
          "numOfClomuns": 2,
          "children": [
            {
              "id": "6e251d92461",
              "type": "column",
              "style": {},
              "rowId": "c6e251d9246",
              "children": [
                {
                  "id": "251d9246179",
                  "type": "text",
                  "style": {},
                  "content": "this is text"
                }
              ]
            },
            {
              "id": "e251d924617",
              "type": "column",
              "style": {},
              "rowId": "c6e251d9246",
              "children": [
                {
                  "id": "51d92461797",
                  "type": "text",
                  "style": {},
                  "content": "this is text"
                }
              ]
            }
          ]
        }
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

  const handleChange = ({id, value}) => {
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
        handleChange
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
