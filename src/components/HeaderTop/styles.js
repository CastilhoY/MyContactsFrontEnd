import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.gray[900]};
  color: #fff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  h1 {
    font-size: 20px;
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.primary.light};;
  }
`;


export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #ecf0f1;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};;
  }
`;
