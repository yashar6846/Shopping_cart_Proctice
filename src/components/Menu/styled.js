import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 72px;
  background-color: #444;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 32px;
  color: white;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  display: block;
  padding: 0 10px;
`;

export const MenuLink = styled(Link)`
  font-size: 1.15rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: ${({ nounderline }) =>
      nounderline ? "none" : "underline"};
  }
`;
