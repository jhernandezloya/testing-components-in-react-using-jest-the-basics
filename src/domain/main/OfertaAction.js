import types from './OfertaTipos';
import EntitiesFactory from '../../middleware/EntitiesFactory';

export default class OfertaAction {
static addElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.ADD, payload: objectoEntidad,entity:types.ENTITY });
  };
}

static replaceElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE_ARRAY, payload: objectoEntidad,entity:types.ENTITY });
  };
}

static delElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.DELETE, payload: objectoEntidad,entity:types.ENTITY });
  };
}

static changeElement = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE, payload: objectoEntidad,entity:types.ENTITY});
  };
}

static replaceAttribute = (clase,method,param) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE_ATTRIBUTE, payload: objectoEntidad,entity:types.ENTITY});
  };
}
};
