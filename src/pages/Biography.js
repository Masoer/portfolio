import { useNavigate } from "react-router-dom";
import {
  Column,
  Container,
  MarginDiv,
  NewSection,
  Image,
  StyledButton,
  ImagePhone,
} from "./Home";
import Info from "./Info";
import PicMe from "./PicMe.jpg";
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
                <h2>Biography</h2>

                <WidthDiv>
                  <Info />
                  <StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
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
