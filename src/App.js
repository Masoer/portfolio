import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlobalStyle from "./Globalcomponents/Globalstyle";
import { Navbar, Navdiv, StyledLink } from "./pages/Navbar";
import Biography from "./pages/Biography";

function App() {
  return (
    <>
      <GlobalStyle />

      <Navbar sticky="top">
        <br></br>
        <Navdiv>
          <StyledLink to="/"> Home </StyledLink>
          <StyledLink to="/Biography"> Biography</StyledLink>
          <StyledLink to="/Projects">Projects</StyledLink>
          <StyledLink to="/Contact"> Contact</StyledLink>
        </Navdiv>
      </Navbar>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/Projects" element={<Projects />} />/
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
