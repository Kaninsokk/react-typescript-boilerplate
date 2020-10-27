import { Machine, assign } from "xstate";
import Axios from "axios";

const fetchPokemonMoves = async ({ moveList }) => {
  return await Promise.all(
    moveList.map(async ({ move }) => {
      const { data } = await Axios.get(move.url);

      return data;
    })
  );
};

export const createPokemonMovesMachine = Machine({
  id: "pokemon-moves-machine",
  initial: "idle",
  context: {
    moveList: [],
  },
  states: {
    idle: {},
    loading: {
      invoke: {
        id: "fetch-pokemon-moves",
        src: fetchPokemonMoves,
        onDone: {
          target: "loaded",
          actions: assign({
            moveList: (ctx, event: any) => event.data,
          }),
        },
      },
    },
    loaded: {},
    failed: {},
  },
  on: {
    FETCH: {
      target: ".loading",
      actions: assign({
        moveList: (context, event: any) => event.moveList,
      }),
    },
  },
});
