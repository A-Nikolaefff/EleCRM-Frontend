import React from 'react';
import styled from "styled-components";
import {Container} from "../../Styles/basicPageComponents";


const StyledFooter = styled.div`
      flex: 0 0 auto;
      background-color: #463f3f;
      color: white;
    `;

const Footer = () => {

    return (
        <StyledFooter>
            <Container>
                Это будущий футер
            </Container>
        </StyledFooter>
    );
};

export default Footer;