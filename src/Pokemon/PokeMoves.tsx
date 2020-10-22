import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

export const PokeMoves = ({ moves }) => {
  const [movesData, setMovesData] = useState([]);

  const addMove = (move) => setMovesData((current) => [...current, move]);

  useEffect(() => {
    setMovesData([]);

    moves.forEach(({ move }) => {
      Axios.get(move.url).then(({ data }) => addMove(data));
    });
  }, [moves]);

  return (
    <StyledFlex>
      {movesData.length <= 0 ? (
        <div>Fetching moves...</div>
      ) : (
        movesData.map((move) => (
          <ListStyle>
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
