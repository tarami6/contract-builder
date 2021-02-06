import React, { useState } from 'react'
import './App.css';
import Body from './components/elements/Body'
import ModalAddRow from './components/common/ModalAddRow'
import ModalAddElementToColumn from './components/common/ModalAddElementToColumn'
import Test from './Test'


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

    return (
        <HtmlContext.Provider
            value={{
                html,
                setHtml,
                modalOpenAddRow,
                modalAddRowToggle
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
                    <HtmlMirror />
                    <ModalAddRow />
                    <ModalAddElementToColumn />

                    {/* <Test /> */}
                </div>

            </div>
        </HtmlContext.Provider>
    );
}

export default App;
