import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Container} from "../../Styles/basicPageComponents";
import {fontTitle, mainTextColor, hoverTextColor} from "../../Styles/globalVariables";

const StyledNavbar = styled.div`
`;
const NavbarContainer = styled(Container)`
  padding: 5px 0;
  border-top: 1px #787878 solid;
  border-bottom: 1px #787878 solid;
`
const LinkItems = styled.div`
  display: flex;
    `;
const StyledLink = styled(Link)`
  margin: 0 15px 0 0;
  font-family: ${fontTitle};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: ${mainTextColor};
  transition: color 0.3s ease 0s;
  &:nth-last-child(1) {
    margin: 0 0 0 0;
  }
  &:hover {
    color: ${hoverTextColor};
  }
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarContainer>
                <LinkItems>
                    <StyledLink to="/requests">Заявки</StyledLink>
                    <StyledLink to="/requests">Заказы</StyledLink>
                    <StyledLink to="/about">О приложении</StyledLink>
                </LinkItems>
            </NavbarContainer>
        </StyledNavbar>
    );
};

export default Navbar;