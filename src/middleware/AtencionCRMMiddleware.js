
import PersonaService from '../api/PersonaService';
import CRMservice from '../api/CRMService';

class AtencionCRMMiddleware  {
  
  async enviarFormulario(param) {
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
                return {valor:1};
              }
                return {valor:-1};
          }
        }
        return {valor:0};
      }
}

export default new AtencionCRMMiddleware;