import React from 'react';
import ContractBody from '../elements/ContractBody'
import { makeStyles } from '@material-ui/core/styles';
import ModalChooseImg from '../common/ModalChooseImg'

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
        </form>
        <ModalChooseImg />
        {/* <Test /> */}
      </div>
    </div>
  );
};

export default MainBuilder;