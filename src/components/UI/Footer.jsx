import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/components";

const Footer = () => {
    const Footer = styled.div`
      flex: 0 0 auto;
      background-color: #463f3f;
      color: white;
    `;
    return (
        <Footer>
            <Container>
                Это будущий футер
            </Container>
        </Footer>
    );
};

export default Footer;