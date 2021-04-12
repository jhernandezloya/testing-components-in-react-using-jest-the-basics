import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import Config from '../config/Config';

export default function configureStore() {
  const loggerMiddleware = createLogger();
  if(Config.ENVIRONMENT !== 'production'){
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));
  }
  return createStore(rootReducer, applyMiddleware(thunk));
}
