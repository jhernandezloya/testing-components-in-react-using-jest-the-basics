import Api from '../utils/Api';
import Config from '../config/Config';

class GuardarDPService {

  constructor() {
    this.url = Config.URL_SERVICE;
    this.api = new Api({ url: this.url });
    this.api.createEntity({ name: 'preexistencia' });
  }

  guardarDPS(token, arrayDPS) {
    const bodyRequest = {
        "preexistencia": arrayDPS,
    };
    const config = { headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`} };
    return this.api.endpoints.preexistencia
      .updatePost(bodyRequest,config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }
}

export default new GuardarDPService;
