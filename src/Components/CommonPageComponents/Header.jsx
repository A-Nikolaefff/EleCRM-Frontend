import React from 'react';
import styled from "styled-components";
import {Container} from "../../Styles/basicComponents";
import logo from "../../Assets/Logo.png"
import {Link} from "react-router-dom";

const StyledHeader = styled.div`
  flex: 0 0 auto;
  background-color: #fafafa;
  padding: 5px 0;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Link to="/">
                    <img src={logo} alt="логотип"/>
                </Link>
            </Container>
        </StyledHeader>
    );
};

export default Header;