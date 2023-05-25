import axios from "axios";
import { GetPokemonApi } from "./api.types";

const BASE_URL = "https://pokeapi.co/api/v2";

const headers = {
  "Content-Type": "application/json",
};

const create = (
  baseURL = process.env.NEXT_PUBLIC_BASE_URL || BASE_URL,
  customHeaders?: Record<string, string> | object,
) => {
  const api = axios.create({
    baseURL,
    headers: {
      ...headers,
      ...customHeaders,
    },
    timeout: 15000,
  });

  const getPokemons: GetPokemonApi = (payload) => {
    const param = new URLSearchParams(payload as Record<string, any>);

    return api.get(`/pokemon?${param}`);
  };

  return {
    getPokemons,
    api,
  };
};

export default {
  create,
};
