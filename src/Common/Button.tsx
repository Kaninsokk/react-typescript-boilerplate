import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #38388d;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  outline: none;

  min-width: 64px;
  min-height: 32px;

  &:hover {
    background-color: #5454b1;
  }
`;

export const Button = ({ children, onClick = () => {} }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};
