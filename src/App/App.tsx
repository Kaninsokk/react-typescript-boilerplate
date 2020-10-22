import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pokemon } from "../Pokemon";
import { Navigation } from "../Navigation";

export const App = () => {
  return (
    <StyledApp>
      <Navigation horizontal={false} />

      <StyledContent>
        <Pokemon />
      </StyledContent>
    </StyledApp>
  );
};

const StyledContent = styled.section`
  margin-left: 16px;
  margin-top: 16px;
`;

const StyledApp = styled.section`
  display: flex;

  height: 100%;
  width: 100%;
`;
