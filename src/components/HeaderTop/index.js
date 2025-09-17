import React from "react";
import { HeaderContainer, Nav, NavItem, NavLink } from "./styles";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <NavLink as={Link} to="/"><h1>Projeto</h1></NavLink>
        </NavItem>
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
