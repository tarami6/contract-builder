import React from 'react';
import DisplayContractBody from '../displayElements/DisplayContractBody'
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Route,
} from "react-router-dom";
import DisplayMain from 'components/display/DisplayMain'

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

  return (
    <div className={classes.root} >
      <div style={{
        width: "75%",
        minHeight: "100vh",
        backgroundColor: '#fff',
        padding: '15px 15px 0px 15px',
      }}>
        <Switch>
          <Route path="/file/:id">
            <form >
              <DisplayContractBody />
            </form>
          </Route>
          <Route path="/newFile">
            <form >
              <DisplayContractBody />
            </form>
          </Route>
          <Route exact path="/">
            <DisplayMain />
          </Route>
        </Switch>
        {/* <Test /> */}
      </div>
    </div>
  );
};

export default MainBuilder;