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

  savePerson(body) {
    return server.post("/pessoa", body);
  }

  getPerson() {
    return server.get("/pessoa");
  }

  updateAddress() {
    return server.put("/api/address", {
      street: "123",
      complement: "34324",
    });
  }

  deleteAddress(id) {
    return server.delete(`/api/address/${id}`);
  }
}
