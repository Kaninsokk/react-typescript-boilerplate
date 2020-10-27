import React, { memo } from "react";
import styled from "styled-components";
import { PokeMoves } from "./PokeMoves";
import { PokeHeader } from "./PokeHeader";
import { useSelector } from "react-redux";
import { IState } from "../reducer/rootReducer";

const PokeInfoHolder = ({ pokemonInfo }) => {
  return (
    <StyledFlex>
      <PokeHeader pokemonInfo={pokemonInfo} />
      <PokeMoves moves={pokemonInfo.moves} />
    </StyledFlex>
  );
};

export const PokeInfo = memo(PokeInfoHolder);

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
