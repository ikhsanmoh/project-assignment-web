import { IPokemon } from "@types";

export interface GeneralApiResponse<T> {
  response: {
    status: number;
    message: string;
    url: string;
  };
  status: number;
  data: T;
}

export interface GeneralMessageResponse {
  message: string;
}

export interface PaginationPayload {
  limit?: number;
  offset?: number;
}

export type GetPokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
};

export type GetPokemonApi = (
  payload?: PaginationPayload,
) => Promise<GeneralApiResponse<GetPokemonResponse>>;
