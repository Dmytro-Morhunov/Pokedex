import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "./config";
import {
  GetPokemonDetailsResponse,
  GetPokemonsResponse,
} from "./pokemon.model";

const PAGE_SIZE = 20;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemons: builder.query<GetPokemonsResponse, number>({
      query: (page: number) =>
        `/pokemon?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, response) => {
        if (!response.previous) {
          currentCache.results = response.results;
        } else {
          currentCache.results.push(...response.results);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPokemonDetails: builder.query<GetPokemonDetailsResponse, string>({
      query: (name: string) => `/pokemon/${name}`,
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonDetailsQuery,
  useLazyGetPokemonDetailsQuery,
} = pokemonApi;
