import EntitiesFactory from '../middleware/EntitiesFactory';

describe('EntitiesFactoryTest', () => {
    //cuando demora en ejecutar la prueba
    jest.setTimeout(6000);
    it('passing test', () => {
        expect.assertions(1);
        const elementos =[];
        return EntitiesFactory.callMethodMiddleware('PersonaMiddleware','obtenerNumeroPersonaService',{token:'f6631a8f-ce31-45aa-9094-7b329ceb5260'}).then(data => expect(data.valor).toEqual(1));
   })

   it('passing test', () => {
    expect.assertions(1);
    const elementos =[];
    return EntitiesFactory.callMethodMiddleware('AtencionCRMMiddleware','enviarFormulario',{token:'f6631a8f-ce31-45aa-9094-7b329ceb5260'}).then(data => expect(data.valor).toEqual(1));
})

   
  })