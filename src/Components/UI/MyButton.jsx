import React from 'react';
import styled from "styled-components";
import {primaryColor} from "../../Styles/globalVariables";
import Button from '@mui/material/Button';

const StyledButton = styled.button`
  padding: 5px 15px;
  font-size: 14px;
  background: transparent;
  border: 1px solid ${primaryColor};
  cursor: pointer;
`

const MyButton = ({children, ...props}) => {
    return (
        <Button variant="contained" {...props}>
            {children}
        </Button>
    );
};

export default MyButton;