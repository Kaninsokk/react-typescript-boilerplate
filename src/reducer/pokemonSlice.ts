import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonInfo: {},
    isLoading: false,
    hasLoaded: false,
  },
  reducers: {
    initFetchPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemon: (state, { payload }) => {
      state.pokemonInfo = payload;
      state.isLoading = false;
      state.hasLoaded = true;
    },
  },
});

export const { initFetchPokemon, setPokemon } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
