import type { PaginationPayload } from "@services/api/api.types";
import { useApi } from "@services/useApi";

export const usePokemons = () => {
  const { api } = useApi();

  const getPokemons = async (payload: PaginationPayload) => {
    const response = await api.getPokemons(payload);

    if (response.status !== 200) {
      throw response;
    } else {
      return response.data;
    }
  };

  const getPokemonDetail = async (slug: string) => {
    const response = await api.getPokemonDetail(slug);

    if (response.status !== 200) {
      throw response;
    } else {
      return response.data;
    }
  };

  return {
    getPokemons,
    getPokemonDetail,
  };
};
