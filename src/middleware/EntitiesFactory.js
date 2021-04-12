import MapClasses from './MapClasses';

class EntitiesFactory {
    
  constructor() {
    this.resultado = undefined;
  }

  async callMethodMiddleware(type,nombreMetodo,parameter){
      const MajorEntity = MapClasses.factoryEntity(type);
      const methods = MapClasses.mapMethods(MajorEntity);
      const methodName = methods.get(nombreMetodo);
      this.resultado = await methodName(parameter);
      return this.resultado;
  }

}

  export default new EntitiesFactory;