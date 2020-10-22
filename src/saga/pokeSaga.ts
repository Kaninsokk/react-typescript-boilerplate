import { takeLatest, retry, put } from "redux-saga/effects";
import { increment } from "../reducer/counterSlice";
import Axios from "axios";
import { initFetchPokemon, setPokemon } from "../reducer/pokemonSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchPokemon(pokemonName: string) {
  return yield Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
}

function* fetchPokemonList({ payload }: PayloadAction<string>) {
  try {
    put(initFetchPokemon());

    const response = yield retry(3, 2000, fetchPokemon, payload);

    response.data.moves.forEach(({ move }) => {
      Axios.get(move.url).then(console.log);
    });

    yield put(setPokemon(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* pokeSagas() {
  yield takeLatest("FETCH_POKEMON", fetchPokemonList);
}
