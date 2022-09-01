import PicMe from "./PicMe.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Column = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NewSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  height: 575px;
  width: auto;
`;

export const MarginDiv = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

export const Tittel = styled.h1`
  font-size: 2rem;
  margin-top: -20px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <NewSection>
          <Column>
            <Image src={PicMe} alt="me" />
            <Container>
              <MarginDiv>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Tittel>MARGRETHE</Tittel>
                <Tittel>SOFIE</Tittel>
                <h3>
                  Hello! I am Margrethe Sofie Erstad. <br></br>I am a frontend
                  developer based in Norway.
                </h3>
                <p>
                  I have a masters in Archaeology from the University of Bergen,{" "}
                  <br></br> but now I'm learning Javascript, html, css and
                  react.
                </p>
                <button onClick={() => navigate("/Biography")}>
                  Learn more
                </button>
              </MarginDiv>
            </Container>
          </Column>
        </NewSection>
      </Container>
    </>
  );
};

export default Home;
