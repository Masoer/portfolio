import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  font-family: helvetica, arial, sans-serif;
  padding: 10px;
  margin: 0 auto;
  max-width: 90%;
  align-items: center;

  position: sticky;
  top: 5px;
  z-index: 1;

  background: rgba(6, 146, 170, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(6, 146, 170, 0.65);

  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const Navdiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const StyledLink = styled(NavLink)`
  color: #008cea;
  text-decoration: none;
  background: none;
  list-style: none;
  font-weight: bold;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

  @media (max-width: 820px) {
    padding-inline: 20px;
    text-align: center;
    font-size: 20px;
  }
`;
