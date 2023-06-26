import ProjectShop from "./projectsPage/img/ProjectShop.png";
import todolist from "./projectsPage/img/todolist.png";
import spaceimg from "./projectsPage/img/spaceimg.png";
import { Column, Container, MarginDiv, NewSection } from "../styles/styles";

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
              <BoxDiv>
                <h2>Verdensrommet</h2>
                <a
                  href="https://masoer.github.io/fallproject/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WebshopImage src={spaceimg} alt="spacesite" type="button" />
                </a>
                <p>Laget i React</p>
              </BoxDiv>
              <Container>
                <MarginDiv>{/* <BoxDiv>For a new box</BoxDiv> */}</MarginDiv>
              </Container>
            </Column>
          </NewSection>
        </Container>
      </MainDiv>
    </>
  );
};

export default Projects;
