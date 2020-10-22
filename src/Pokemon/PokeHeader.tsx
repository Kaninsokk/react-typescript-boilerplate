import React from "react";
import styled from "styled-components";

export const PokeHeader = ({
  pokemonInfo: {
    name,
    sprites: { front_shiny },
  },
}) => {
  return (
    <StyledHeader>
      <h1>{name}</h1>
      <StyledImg src={front_shiny} />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 128px;
  max-height: 128px;
`;
