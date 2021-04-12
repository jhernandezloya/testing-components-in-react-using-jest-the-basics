import AtencionCRMMiddleware from './AtencionCRMMiddleware';
import PersonaMiddleware from './PersonaMiddleware';
import OfertaMiddleware from './OfertaMiddleware';

class MapClasses {
   
    constructor(){
        this.a = undefined;
    }
    
     factoryEntity(type)    {
        this.a = 0;
        const map = new Map([ 
            ['AtencionCRMMiddleware', AtencionCRMMiddleware],
            ['PersonaMiddleware', PersonaMiddleware ],
            ['OfertaMiddleware', OfertaMiddleware ],
        ]); 
        return map.get(type);
    }

     mapMethods(type)    {
        this.a = 0;
        const {obtenerNumeroPersonaService,enviarFormulario,generarOferta,testElemento} = type;
        const mapMethods = new Map([ 
                     ['obtenerNumeroPersonaService', obtenerNumeroPersonaService],
                     ['enviarFormulario',enviarFormulario],
                     ['generarOferta',generarOferta],
                     ['testElemento',testElemento],
                    ]); 
        return mapMethods;
    }
}
export default new MapClasses;