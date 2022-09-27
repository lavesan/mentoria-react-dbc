import { server } from "../config/server";

export class AddressService {
  static INSTANCE;

  static getInstance() {
    if (!this.INSTANCE) this.INSTANCE = new AddressService();
    return this.INSTANCE;
  }

  findByCep(cep) {
    return server.get(`/ws/${cep}/json/`);
  }
}
