import ProjectShop from "./projectsPage/img/ProjectShop.png";
import todolist from "./projectsPage/img/todolist.png";
import {
  Column,
  Container,
  Image,
  ImagePhone,
  MarginDiv,
  NewSection,
  StyledButton,
  Tittel,
} from "../styles/styles";

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
      <Container>
        <NewSection>
          <Column>
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
            <Container>
              <MarginDiv>
                <BoxDiv>
                  <h2>To do list</h2>
                  <a
                    href="https://github.com/Masoer/todolist"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WebshopImage src={todolist} alt="webshop" type="button" />
                  </a>
                  <p>Laget med javascript</p>
                </BoxDiv>
              </MarginDiv>
            </Container>
          </Column>
        </NewSection>
      </Container>
    </MainDiv>
  );
};

export default Projects;
