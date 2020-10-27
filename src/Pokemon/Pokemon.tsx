import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Common/Button";
import { Input } from "../Common/Input";
import { createFetchMachine } from "../stateMachine/pokemonInfoMachine";
import { PokeInfo } from "./PokeInfo";

export const Pokemon = () => {
  const [pokemonNameField, setPokemonNameField] = useState("");
  const [currentState, send] = useMachine(createFetchMachine);

  const { pokemonInfo } = currentState.context;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonNameField(event.target.value);
  };

  const handleSearch = () => {
    // dispatch({ type: "FETCH_POKEMON", payload: pokemonNameField });
    send("SEARCH", { name: pokemonNameField });
  };

  return (
    <PokemonStyling>
      <Input onChange={handleChange} placeholder="Search pokemon" />

      <Button onClick={handleSearch}>Search</Button>

      {currentState.value === "loaded" && (
        <PokemonArea>
          <PokeInfo pokemonInfo={pokemonInfo} />
        </PokemonArea>
      )}
    </PokemonStyling>
  );
};

const PokemonStyling = styled.div``;

const PokemonArea = styled.div`
  margin-top: 32px;
`;
