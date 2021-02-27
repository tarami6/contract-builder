import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {setCurrentEditable} from './actions/actionsEditable'

const composeEnhancers = composeWithDevTools({
    setCurrentEditable,
    trace: true,
    traceLimit: 25,
  })

  
export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
));
