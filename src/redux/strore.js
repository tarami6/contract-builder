import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {setCurrentEditable} from './actions/actionsEditable'
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({
    setCurrentEditable,
    trace: true,
    traceLimit: 25,
  })

  
export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
));
