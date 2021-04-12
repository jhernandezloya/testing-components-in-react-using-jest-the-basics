import types from './CounterTipos';
import initialState from '../../store/initialState';

const CounterReducer = (state= initialState.CounterOpc, action) => {

  switch (action.type) {
    case types.REPLACE:
      return {
        ...state,
        elemento: action.payload
      };
      
    case types.DELETE:  {
      const isArray = Array.isArray(state.elemento);
      return  {
        ...state
      , elemento: isArray?state.elemento.filter(item => !item.compareDel(action.payload)):action.payload
      }
    }
      
    case types.ADD: {
      const arrayElement =[];
      const arrayInsert = Array.isArray(state.elemento)?[...state.elemento,action.payload]:[...arrayElement,action.payload];
      return  {
        ...state
      , elemento: arrayInsert
      }
    }
    
    case types.REPLACE_ARRAY: {
      const actionpayload = Array.isArray(state.elemento) ? action.payload:{};
      const findElement= Array.isArray(state.elemento) ?state.elemento.filter(item => item.compareUpd(action.payload)).length:false;
      return {
          ...state
          , elemento: findElement ?[...state.elemento.filter(item => !item.compareUpd(action.payload)),actionpayload]:state.elemento
        };
    }
    default:
      return state;
  }
}

export default CounterReducer;