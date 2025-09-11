import React from "react";
import { HeaderContainer, Nav, NavItem, NavLink } from "./styles";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <HeaderContainer>
      <h1>Projeto</h1>
      <Nav>
        <NavItem>
          <NavLink as={Link} to="/tabela">Tabela</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/contato">Contato</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/participantes">Participantes</NavLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default HeaderTop;
