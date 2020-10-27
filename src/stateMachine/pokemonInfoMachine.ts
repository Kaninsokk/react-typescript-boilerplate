import { assign, Machine } from "xstate";
import Axios from "axios";
import { IPokemonInfo } from "../interface/machines";

const fetchPokemonInfo = async ({ pokemonName }) => {
  return Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    ({ data }) => data
  );
};

export const createFetchMachine = Machine({
  id: "pokemon-fetch-machine",
  initial: "idle",
  context: {
    pokemonName: "",
    pokemonInfo: undefined,
    error: [],
  },
  states: {
    idle: {},
    search: {
      invoke: {
        id: "fetch-pokemon-move",
        src: fetchPokemonInfo,
        onDone: {
          target: "loaded",
          actions: assign({
            pokemonInfo: (context, event: any) => event.data,
          }),
        },
        onError: "failed",
      },
    },
    loaded: {},
    failed: {
      on: {
        RETRY: "search",
      },
    },
  },
  on: {
    SEARCH: {
      target: ".search",
      actions: assign({
        pokemonName: (context, event: any) => event.name,
      }),
    },
  },
});
