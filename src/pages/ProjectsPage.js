import ProjectShop from "./projectsPage/img/ProjectShop.png";
import todolist from "./projectsPage/img/todolist.png";
import spaceimg from "./projectsPage/img/spaceimg.png";
import phillipskarriere from "./projectsPage/img/phillipskarriere.png";
import novel from "./projectsPage/img/novel.png";

import { Column, Container, NewSection } from "../styles/styles";

import {
  BoxDiv,
  MainDiv,
  WebshopImage,
} from "./projectsPage/components/StyledProjects";

import styled from "styled-components";

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

const Projects = () => {
  return (
    <>
      <MainDiv>
        <h1>Projekter</h1>
        <br></br>
        <Container>
          <NewSection>
            <Column>
              <ProjectContainer>
                <BoxDiv>
                  <h2>Phillipskarriere.no</h2>
                  <a
                    href="https://www.phillipskarriere.no/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WebshopImage
                      src={phillipskarriere}
                      alt="phillipskarriere.no"
                      type="button"
                    />
                  </a>
                  <p>Laget i React</p>
                </BoxDiv>
              </ProjectContainer>
              {/* New Container */}
              <ProjectContainer>
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
              </ProjectContainer>
            </Column>
          </NewSection>
        </Container>

        <Container>
          <NewSection>
            <Column>
              <ProjectContainer>
                <BoxDiv>
                  <h2>Verdensrommet</h2>
                  <a
                    href="https://masoer.github.io/fallproject/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WebshopImage
                      src={spaceimg}
                      alt="spacesite"
                      type="button"
                    />
                  </a>
                  <p>Laget i React</p>
                </BoxDiv>
              </ProjectContainer>

              <ProjectContainer>
                <BoxDiv>
                  <h2>Nettbutikk</h2>
                  <a
                    href="https://masoer.github.io/summertask/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WebshopImage
                      src={ProjectShop}
                      alt="webshop"
                      type="button"
                    />
                  </a>
                  <p>Laget i React</p>
                </BoxDiv>
              </ProjectContainer>
            </Column>
          </NewSection>
        </Container>
      </MainDiv>

      <MainDiv>
        <Container>
          <NewSection>
            <Column>
              <ProjectContainer>
                <BoxDiv>
                  <h2>Interaktiv novelle </h2>
                  <a
                    href="https://dashingdon.com/play/cesela/footsteps/mygame/index.php?cb=14696"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WebshopImage
                      src={novel}
                      alt="interactive novel"
                      type="button"
                    />
                  </a>
                  <p>Laget med ChoiceScript</p>
                </BoxDiv>
              </ProjectContainer>
            </Column>
          </NewSection>
        </Container>
      </MainDiv>
    </>
  );
};

export default Projects;
