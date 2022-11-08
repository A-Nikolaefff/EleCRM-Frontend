import React from 'react';
import styled from "styled-components";
import {primaryColor} from "../../Styles/globalVariables";

const StyledButton = styled.button`
  padding: 5px 15px;
  font-size: 14px;
  background: transparent;
  border: 1px solid ${primaryColor};
  cursor: pointer;
`

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;