import ProjectShop from "./ProjectShop.png";
import styled from "styled-components";

export const WebshopImage = styled.img`
  width: auto;
  height: 200px;
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

  max-width: 500px;
  max-height: 500px;
  align-items: center;
  margin-left: 40px;
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
