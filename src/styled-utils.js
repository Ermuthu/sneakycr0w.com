import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  height: 75px;
  background-color: #202020;
`;
export const Logo = styled.img`height: 75px;`;

export const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
`;
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
