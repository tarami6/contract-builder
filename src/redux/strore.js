import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setCurrentEditable } from './actions/actionsEditable'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = composeWithDevTools({
  setCurrentEditable,
  trace: true,
  traceLimit: 25,
})

export const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
))

export const  persistor = persistStore(store);
// export default createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// ));

