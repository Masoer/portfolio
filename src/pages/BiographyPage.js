import { useNavigate } from "react-router-dom";
import {
  Column,
  Container,
  Image,
  ImagePhone,
  MarginDiv,
  NewSection,
  StyledButton,
} from "../styles/styles";
import Info from "./biographyPage/components/Info";
import PicMe from "../img/PicMe.jpg";
import styled from "styled-components";

export const WidthDiv = styled.div`
  max-width: 750px;
`;

const Biography = () => {
  const navigate = useNavigate();
  return (
    <>
      <ImagePhone src={PicMe} alt="me" />
      <Container>
        <NewSection>
          <Column>
            <Image src={PicMe} alt="me" />
            <Container>
              <MarginDiv>
                <h2>Biografi</h2>

                <WidthDiv>
                  <Info />
                  <StyledButton onClick={() => navigate(-1)}>
                    Tilbake
                  </StyledButton>
                </WidthDiv>
              </MarginDiv>
            </Container>
          </Column>
        </NewSection>
      </Container>
    </>
  );
};

export default Biography;
