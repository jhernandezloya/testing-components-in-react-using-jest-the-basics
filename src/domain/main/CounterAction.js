import types from './CounterTipos';
import EntitiesFactory from '../../middleware/EntitiesFactory';


export const addElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.ADD, payload: objectoEntidad });
  };
}

export const replaceElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE_ARRAY, payload: objectoEntidad });
  };
}

export const delElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.DELETE, payload: objectoEntidad });
  };
}

export const changeElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE, payload: objectoEntidad,reducer:'CounterOpc' });
  };
}
export default class CounterAction{};
