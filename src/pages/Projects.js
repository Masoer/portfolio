import ProjectShop from "./ProjectShop.png";
import styled from "styled-components";

export const WebshopImage = styled.img`
  width: auto;
  height: 30vh;

  @media only screen and (max-width: 40em) {
    height: 20vh;
  }

  /* @media only screen and (min-width: 100em) {
    height: 20vh;
  } */
`;

export const MainDiv = styled.div`
  color: black;
  margin: 15px;
  text-align: center;
`;

export const BoxDiv = styled.div`
  background: rgba(6, 146, 170, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(6, 146, 170, 0.65);

  width: 40vw;
  height: 45vh;
  align-items: center;
  margin-left: 7.5vh;

  @media only screen and (max-width: 40em) {
    width: 85vw;
    height: 31vh;
    margin: 0 auto;
  }
`;

const Projects = () => {
  return (
    <MainDiv>
      <h1>Projects</h1>
      <br></br>
      <BoxDiv>
        <h2>Web shop</h2>
        <a
          href="https://masoer.github.io/summertask/"
          target="_blank"
          rel="noreferrer"
        >
          <WebshopImage src={ProjectShop} alt="webshop" type="button" />
        </a>
        <p>Made with React and Javascript</p>
      </BoxDiv>
    </MainDiv>
  );
};

export default Projects;
