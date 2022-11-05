import React from 'react';
import styled from "styled-components";

const StyledoaderWrapper = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 50px;
    `;

const LoaderWrapper = ({children}) => {

    return (
        <StyledoaderWrapper>
            {children}
        </StyledoaderWrapper>
    );
};

export default LoaderWrapper;