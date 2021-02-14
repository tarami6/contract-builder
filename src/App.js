import React, { useRef } from 'react'
import './App.css';
import Body from './components/elements/Body'
import ModalAddRow from './components/common/ModalAddRow'
import ModalAddElementToColumn from './components/common/ModalAddElementToColumn'
import ButtonToPrint from './components/print/ButtonToPrint'
import { Button, Container, Row, Col } from 'react-bootstrap'

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
        width: "60%",
        minHeight: "100vh",
        backgroundColor: '#fff'
      }}>
        <form onSubmit={_handleSubmit}>
          <HtmlMirror />
          <Container fluid>
            <Row style={{
              isplay: "flex",
              minHeight: "80px",
              justifyContent: "center",
              alignItems: "center",
            }}>
               <Col style={{
                display: "flex",
                justifyContent: "center"
              }}>
                <ButtonToPrint />
              </Col>
              <Col style={{
                display: "flex",
                justifyContent: "center"
              }}>
                <Button type="submit" variant="outline-light" style={{ backgroundImage: "linear-gradient(to right,orange,red)"}}>Save Contract</Button>
              </Col>
            </Row>
          </Container>

        </form>
        <ModalAddRow />
        <ModalAddElementToColumn />

        {/* <Test /> */}
      </div>

    </div>
  );
}

export default App;
