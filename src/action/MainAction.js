import EntitiesFactory from '../middleware/EntitiesFactory';
import types from '../type/initialType';

export default class MainAction {
static addElement = (clase,method,param,entidad) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.ADD, payload: objectoEntidad,reducer:entidad });
  };
}

static replaceElement = (clase,method,param,entidad) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE_ARRAY, payload: objectoEntidad,reducer:entidad });
  };
}

static delElement = (clase,method,param,entidad) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.DELETE, payload: objectoEntidad,reducer:entidad });
  };
}

static changeElement = (clase,method,param,entidad) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE, payload: objectoEntidad,reducer:entidad });
  };
}

static replaceAttribute = (clase,method,param,entidad) => {
  return async dispatch => {
    const objectoEntidad = await EntitiesFactory.callMethodMiddleware(clase,method,param)
   dispatch({ type: types.REPLACE_ATTRIBUTE, payload: objectoEntidad,reducer:entidad });
  };
}
};
