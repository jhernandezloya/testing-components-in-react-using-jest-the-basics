import initialType from '../../type/initialType';
import initialState from '../../store/initialState';

const CounterReducer = (state= initialState.CounterOpc, action) => {
  if(action.reducer === initialType.REDUCER_COUNTER)   {
      switch (action.type) {
        case initialType.REPLACE:
          return {
            ...state,
            elemento: action.payload
          };
          
        case initialType.DELETE:  {
          const isArray = Array.isArray(state.elemento);
          return  {
            ...state
          , elemento: isArray?state.elemento.filter(item => !item.compareDel(action.payload)):action.payload
          }
        }
          
        case initialType.ADD: {
          const arrayElement =[];
          const arrayInsert = Array.isArray(state.elemento)?[...state.elemento,action.payload]:[...arrayElement,action.payload];
          return  {
            ...state
          , elemento: arrayInsert
          }
        }
        
        case initialType.REPLACE_ARRAY: {
          const actionpayload = Array.isArray(state.elemento) ? action.payload:{};
          const findElement= Array.isArray(state.elemento) ?state.elemento.filter(item => item.compareUpd(action.payload)).length:false;
          return {
              ...state
              , elemento: findElement ?[...state.elemento.filter(item => !item.compareUpd(action.payload)),actionpayload]:state.elemento
            };
        }

        case initialType.REPLACE_ATTRIBUTE: {
          const elementReplace = Array.isArray(state.elemento) ? {}: Object.assign({}, state.elemento);
          const valor = action.payload.replaceAttribute(elementReplace);
          return {
              ...state
              , elemento: valor
            };
        }
        default:
          return state;
      }
  } else{
    return state;
  }
}

export default CounterReducer;