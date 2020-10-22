import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../reducer/rootReducer";
import { Input } from "../Common/Input";
import styled from "styled-components";
import { PokeInfo } from "./PokeInfo";
import { Button } from "../Common/Button";

export const Pokemon = () => {
  const dispatch = useDispatch();
  const [pokemonNameField, setPokemonNameField] = useState("");
  const { pokemonInfo, hasLoaded } = useSelector(
    (state: IState) => state.pokemon
  );

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON", payload: 'ditto' });
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonNameField(event.target.value);
  };

  const handleSearch = () =>
    dispatch({ type: "FETCH_POKEMON", payload: pokemonNameField });

  return (
    <PokemonStyling>
      <Input onChange={handleChange} placeholder="Search pokemon" />

      <Button onClick={handleSearch}>Search</Button>

      {hasLoaded && (
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
