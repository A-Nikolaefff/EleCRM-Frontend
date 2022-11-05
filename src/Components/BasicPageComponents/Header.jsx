import React from 'react';
import styled from "styled-components";
import {Container} from "../../Styles/basicPageComponents";

const StyledHeader = styled.div`
  flex: 0 0 auto;
  background-color: #4de12a;
  color: white;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                Это будущий хедер
            </Container>
        </StyledHeader>
    );
};

export default Header;