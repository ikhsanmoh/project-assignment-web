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

export interface GetPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export type GetPokemonApi = (
  payload?: PaginationPayload,
) => Promise<GeneralApiResponse<GetPokemonResponse>>;

export type GetPokemonDetailResponse = any;

export type GetPokemonDetailApi = (
  slug: string,
) => Promise<GeneralApiResponse<GetPokemonDetailResponse>>;
