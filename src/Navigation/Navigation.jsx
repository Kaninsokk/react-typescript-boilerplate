import React from "react";
import styled from "styled-components";

export const Navigation = ({ horizontal = false }) => {
  return (
    <StyledFlex>
      <StyledList>
        <StyledListElement>Hei sveis!</StyledListElement>
      </StyledList>
    </StyledFlex>
  );
};

const StyledListElement = styled.li`
  padding: 16px;

  border-right: 1px solid black;
  border-bottom: 1px solid black;

  &:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  text-decoration: none;
  list-style-type: none;

  margin: 0;
  padding: 0;
`;

const StyledFlex = styled.nav`
  background-color: #6294f1;

  display: flex;
  flex-direction: column;

  min-height: 100%;
  width: 250px;
`;
