import { combineReducers } from 'redux';
import CounterReducer from '../domain/main/CounterReducer';
import OfertaReducer from '../domain/main/OfertaReducer';


const rootReducer = combineReducers({
  CounterOpc: CounterReducer,
  OfertaOpc: OfertaReducer
});

export default rootReducer;
