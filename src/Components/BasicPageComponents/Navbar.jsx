import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Container} from "../../Styles/basicPageComponents";

const StyledNavbar = styled.div`
      background-color: #c4ffe6;
    `;
const Links = styled.div`
    `;

const Navbar = () => {
    return (
        <StyledNavbar>
            <Container>
                <Links>
                    <Link to="/requests">Заявки</Link>
                    <Link to="/about">О сайте</Link>
                </Links>
            </Container>
        </StyledNavbar>
    );
};

export default Navbar;