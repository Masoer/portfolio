import ProjectShop from "./projectsPage/img/ProjectShop.png";

import {
  BoxDiv,
  MainDiv,
  WebshopImage,
} from "./projectsPage/components/StyledProjects";

const Projects = () => {
  return (
    <MainDiv>
      <h1>Projekter</h1>
      <br></br>
      <BoxDiv>
        <h2>Nettbutikk</h2>
        <a
          href="https://masoer.github.io/summertask/"
          target="_blank"
          rel="noreferrer"
        >
          <WebshopImage src={ProjectShop} alt="webshop" type="button" />
        </a>
        <p>Laget i React</p>
      </BoxDiv>
    </MainDiv>
  );
};

export default Projects;
