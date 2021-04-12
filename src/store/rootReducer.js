import { combineReducers } from 'redux';
import CounterReducer from '../domain/main/CounterReducer';


const rootReducer = combineReducers({
  CounterOpc: CounterReducer,
});

export default rootReducer;
