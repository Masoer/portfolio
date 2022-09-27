import { Header, NavList, NavToggle } from "../pages/StyledHeader";
import { useState, useRef } from "react";
import { StyledLink } from "./Navbar";

const NavBarHeader = () => {
  const [active, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!active);
  };

  const autoClose = () => {
    setActive(false);
  };

  const menu = useRef(null);

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false);
    }
  };

  document.addEventListener("mousedown", closeMenu);

  return (
    <Header ref={menu}>
      <NavList active={active}>
        <StyledLink onClick={autoClose} to="/Home">
          Home
        </StyledLink>
        <StyledLink onClick={autoClose} to="/Biography">
          Biography
        </StyledLink>
        <StyledLink onClick={autoClose} to="/Projects">
          Projects
        </StyledLink>
        <StyledLink onClick={autoClose} to="/Contact">
          Contact
        </StyledLink>
      </NavList>
    </Header>
  );
};

export default NavBarHeader;
