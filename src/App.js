import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";
import GlobalStyle from "./styles/Globalstyle";
import { Navbar, Navdiv, StyledLink } from "./styles/Navbar";
import Biography from "./pages/BiographyPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <Navbar sticky="top">
        <br></br>
        <Navdiv>
          <StyledLink to="/"> Home </StyledLink>
          <StyledLink to="/BiographyPage"> Biography</StyledLink>
          <StyledLink to="/ProjectsPage">Projects</StyledLink>
          <StyledLink to="/ContactPage"> Contact</StyledLink>
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
