
import PersonaService from '../api/PersonaService';
import CRMservice from '../api/CRMService';


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
}

export default new OfertaMiddleware;