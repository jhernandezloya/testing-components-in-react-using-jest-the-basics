import PersonaMiddleware from '../middleware/PersonaMiddleware';

describe('PersonaMiddlewareTest', () => {
    //cuando demora en ejecutar la prueba
    jest.setTimeout(6000);
    it('passing test', () => {
        expect.assertions(1);
        return PersonaMiddleware.obtenerNumeroPersonaService({token:'f6631a8f-ce31-45aa-9094-7b329ceb5260'}).then(data => expect(data.valor).toEqual(2));
    })
   
  })