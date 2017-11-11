import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto', 'Open Sans'],
  },
});

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 75px auto 1fr;
  grid-gap: 10px;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const Navigation = styled.header`
  display: flex;
  padding: 10px;
  grid-column: span 4;
  justify-content: end;
  grid-row-start: 1;
  box-shadow: 0 4px 2px -2px black;
`;

export const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px;
  color: white;
  font-size: 0.85em;
  letter-spacing: 1px;
  align-self: center;
  margin: 5px;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 0 5px 2px #15191b;
  transition: color 0.25s;
  &:hover {
    color: #5bba49;
  }
`;

export const Header = styled.div`
  grid-row-start: 2;
`;
export const Logo = styled.img`
  height: 75px;
`;

export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: stretch;
  flex-wrap: wrap;
  grid-row-start: 3;
  grid-column: span 4;
  margin: 5px;
`;
