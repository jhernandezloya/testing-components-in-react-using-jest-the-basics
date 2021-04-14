
import PersonaService from '../api/PersonaService';
import CRMservice from '../api/CRMService';
import {Oferta} from '../store/Entities';

class OfertaMiddleware {


  async generarOferta(param) {
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
                return {esoferta:10};
              }
                return {esoferta:8};
          }
        }
        return {esoferta:0};
      }

      async replaceTestOferta(param) {
        
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        const entidadCounter =  new Oferta();
        entidadCounter.rut = param.ruts;
        entidadCounter.monto = param.monto;
        return entidadCounter;
      }

      async replaceTestsoloMonto(param) {
        
        const b = (typeof this === 'undefined');
        if(!b) {
          console.log('-------');
        }
        const entidadCounter =  new Oferta();
        entidadCounter.monto = param.monto;
        return entidadCounter;
      }
}

export default new OfertaMiddleware;