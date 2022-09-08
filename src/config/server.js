import axios from "axios";

export const server = axios.create({
  baseURL: "https://viacep.com.br",
});
