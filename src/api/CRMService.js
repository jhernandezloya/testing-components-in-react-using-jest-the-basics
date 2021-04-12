import Api from '../utils/Api';
import Config from '../config/Config';

class CRMservice {

  constructor() {
    this.url = `${Config.URL_SERVICE}crm/`;
    this.api = new Api({ url: this.url });
    this.api.createEntities([{ name: 'atencion' }, { name: 'campanas' }]);
  }

  obtenerCampanas(token) {
    const config = { headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`} };
    return this.api.endpoints.campanas
      .createGet(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  enviarDatosSocio(token, email, telefono ) {
    const bodyRequest = {
        "email": email,
        "telefono": telefono 
    };
    const config = { headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`} };
    return this.api.endpoints.atencion
      .updatePost(bodyRequest,config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  actualizarDatosSocio( token, rut, codigoCampana, email, telefono ) {
    const bodyRequest = {
        "rut": rut,
        "codigoCampana": codigoCampana,
        "email": email,
        "telefono": telefono
    };
    const config = { headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`} };
    return this.api.endpoints.campanas
      .updatePost(bodyRequest,config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default new CRMservice;
