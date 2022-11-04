import React from 'react';
import {Link} from "react-router-dom";
import { Container } from "../../styles/components"
import styled from "styled-components";

const Navbar = () => {
    const Navbar = styled.div`
      background-color: #c4ffe6;
    `;
    const Links = styled.div`
    `;

    return (
        <Navbar>
            <Container>
                <Links>
                    <Link to="/requests">Заявки</Link>
                    <Link to="/about">О сайте</Link>
                </Links>
            </Container>
        </Navbar>
    );
};

export default Navbar;