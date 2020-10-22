import React, { DetailedHTMLProps, HTMLAttributes, memo } from "react";
import styled from "styled-components";

export const Input = ({
  ref,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  border-radius: 4px;
  padding: 8px;
`;
