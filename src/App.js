import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlobalStyle from "./Globalcomponents/Globalstyle";
import { Navbar, Navdiv } from "./pages/Navbar";
import Biography from "./pages/Biography";

function App() {
  return (
    <>
      <GlobalStyle />

      <Navbar sticky="top">
        <br></br>
        <Navdiv>
          <Link to="/Home"> /Home</Link>
          <Link to="/Biography"> /Biography</Link>
          <Link to="/Projects">/Projects</Link>
          <Link to="/Contact"> /Contact</Link>
        </Navdiv>
      </Navbar>

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Biography" element={<Biography />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
