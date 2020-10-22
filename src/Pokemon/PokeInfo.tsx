import React from "react";
import styled from "styled-components";
import { PokeMoves } from "./PokeMoves";
import {PokeHeader} from "./PokeHeader";

export const PokeInfo = ({ pokemonInfo }) => {
  return (
    <StyledFlex>
      <PokeHeader pokemonInfo={pokemonInfo} />
      <PokeMoves moves={pokemonInfo.moves} />
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
