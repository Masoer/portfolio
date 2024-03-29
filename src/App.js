import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import GlobalStyle from "./styles/Globalstyle";
import { Navbar, Navdiv, StyledLink } from "./styles/Navbar";
import Biography from "./pages/BiographyPage";
import NavBarHeader from "./components/NavBarHeader";

function App() {
  return (
    <>
      <GlobalStyle />

      <NavBarHeader />

      <Navbar sticky="top">
        <br></br>
        <Navdiv>
          <StyledLink to="/"> Hjem </StyledLink>
          <StyledLink to="/BiographyPage"> Biografi</StyledLink>
          <StyledLink to="/ProjectsPage">Prosjekt</StyledLink>
          <StyledLink to="/ContactPage"> Kontakt</StyledLink>
        </Navdiv>
      </Navbar>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/BiographyPage" element={<Biography />} />
        <Route path="/ProjectsPage" element={<Projects />} />/
        <Route path="/ContactPage" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
