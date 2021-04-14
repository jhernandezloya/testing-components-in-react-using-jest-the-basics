
import PersonaService from '../api/PersonaService';
import CRMservice from '../api/CRMService';
import {Counter} from '../store/Entities';


class PersonaMiddleware {


  async obtenerNumeroPersonaService(param) {
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        const obtenerNumeroPersona = await PersonaService.obtenerNumeroPersona(param.token);
        const {data} = obtenerNumeroPersona;
        const {rut} = data;
        if(rut !== undefined)  {
           const obtenerCampanas = await CRMservice.obtenerCampanas(param.token);
          if(obtenerCampanas !== undefined)
          { 
              if(obtenerCampanas.data !== null)  {
                return new Counter(rut,'Juan');
              }
                return new Counter(rut,'Pedro');
          }
        }
        return {valor:0};
      }
      
  async testElemento(param) {
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        return new Counter(param.ruts,param.name);
      }
  
  async replaceTestCounter(param) {
        
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        const entidadCounter =  new Counter();
        entidadCounter.rut = param.ruts;
        entidadCounter.name = param.name;
        return entidadCounter;
      }
  
  async replaceTestCountersolonombre(param) {
        
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        const entidadCounter =  new Counter();
        entidadCounter.name = param.name;
        return entidadCounter;
      }
}



export default new PersonaMiddleware;