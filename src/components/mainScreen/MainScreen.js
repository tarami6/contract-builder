import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './appBar/AppBar';
import Logo from './appBar/Logo';
import NavBar from './navBar/NavBar';
import MainBuilder from '../mainBuilder/MainBuilder'
import DynamicStyle from '../editAndStyle/style/DynamicStyle'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: '#2a3040',
  },
  content: {
    display: 'flex',
    paddingTop: '76px'
  },
  topBar: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '76px',
    zIndex: 2,
  },
  footer: {
    height: '10%'
  },
  appBar: {
    padding: '0 15',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const MainScreen = () => {
  // const [ data, setData ] = useState()

  // return (
  //   <>
  //   <textarea onChange={(e) => {
  //     setData(e.target.value)
  //   }}/>
  //   <div dangerouslySetInnerHTML={{__html: data}}>
      
  //     </div>
  //   </>
  // )
  const classes = useStyles();
  // useEffect(() => {
  //   axios.get(`https://shm-back-end.herokuapp.com/api/html/`, {
  //     headers: {"auth-token" : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzU3ZDBmMzIzYzY0ODgyZmNmODRiYiIsImlhdCI6MTYxODMyMDM3N30.2TAY9zctbEyj-1xwKe5QdM3iziiG4NFJzCT1g1xJlTo`}
  //   })
  //   .then(res => {
  //     console.log('persons', res.data)
  //   }).catch(err => console.log('err', err))
  // }, [])
  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <Logo />
        <AppBar />
      </div>
      <div className={classes.content}>
        <NavBar />
        <MainBuilder />
        <DynamicStyle />
      </div>
    </div>
  );
};

export default MainScreen;
