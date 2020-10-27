import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useMachine } from "@xstate/react";
import { useDispatch } from "react-redux";
import { createPokemonMovesMachine as pokemonMovesMachine } from "../stateMachine/pokemonMovesMachine";

export const PokeMoves = ({ moves }) => {
  const [currentState, send] = useMachine(pokemonMovesMachine);

  useEffect(() => {
    send("FETCH", { moveList: moves });
  }, [moves]);

  const { moveList } = currentState.context;

  return (
    <StyledFlex>
      {currentState.value === "loading" ? (
        <div>Fetching moves...</div>
      ) : (
        moveList.map((move) => (
          <ListStyle key={move.name}>
            {move.name} - {move.type.name}
          </ListStyle>
        ))
      )}
    </StyledFlex>
  );
};

const ListStyle = styled.li`
  padding: 16px;
`;

const StyledFlex = styled.ul`
  list-style-type: none;

  border: 1px solid black;
  border-radius: 4px;

  min-width: 200px;
  min-height: 500px;

  padding: 0;
  margin: 0;
`;
