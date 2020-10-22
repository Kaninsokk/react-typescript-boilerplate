import { combineReducers } from "redux";
import { counterReducer } from "./counterSlice";
import { pokemonReducer } from "./pokemonSlice";

export interface IState {
  counter: number;
  pokemon: {
    pokemonInfo: Record<string, unknown>;
    isLoading: boolean;
    hasLoaded: boolean;
  };
}

export const rootReducer = () =>
  combineReducers({
    counter: counterReducer,
    pokemon: pokemonReducer,
  });
