import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  margin: 5px 0;
  border: 1px solid teal;
`;

const Input = (props) => {
    return (
        <StyledInput {...props}/>
    );
};

export default Input;