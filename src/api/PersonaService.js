import Api from '../utils/Api';
import Config from '../config/Config';

class PersonaService {
  constructor() {
    this.url = Config.URL_SERVICE;
    this.api = new Api({ url: this.url });
    this.api.createEntity({ name: 'persona' });
  }

  obtenerNumeroPersona(token) {
    const config = { headers: { "Content-Type": "application/json",  Authorization: `Bearer ${token}`} };
    return this.api.endpoints.persona
      .createGet(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

}

export default new PersonaService;