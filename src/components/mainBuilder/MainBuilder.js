import React from 'react';
import ContractBody from '../elements/ContractBody'
import { makeStyles } from '@material-ui/core/styles';
import ModalAddRow from '../common/ModalAddRow'
import ModalAddElementToColumn from '../common/ModalAddElementToColumn'
import ButtonToPrint from '../print/ButtonToPrint'
import DynamicStyle from '../common/DynamicStyle'
import { Button, Container, Row, Col } from 'react-bootstrap'

const useStyle = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20%'
  }
}))

const MainBuilder = () => {
  const classes = useStyle()
  const _handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit html structure to server')
  }
  return (
    <div className={classes.root} >
      <div style={{
        width: "75%",
        minHeight: "100vh",
        backgroundColor: '#fff',
        padding: '15px 15px 0px 15px',
      }}>
        <form onSubmit={_handleSubmit}>
          <ContractBody />
          {/* <Container fluid>
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
                <Button type="submit" variant="outline-light" style={{ backgroundImage: "linear-gradient(to right,orange,red)" }}>Save Contract</Button>
              </Col>
            </Row>
          </Container> */}
        </form>
        {/* <ModalAddRow /> */}
        <ModalAddElementToColumn />

        {/* <Test /> */}
      </div>
    </div>
  );
};

export default MainBuilder;