import PicMe from "../img/PicMe.jpg";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_TEXT } from "./homePage/text";
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

const Home = () => {
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
                <Tittel>
                  {HOME_PAGE_TEXT.NAME.first}
                  <br />
                  {HOME_PAGE_TEXT.NAME.middle}
                </Tittel>

                <h3>
                  {HOME_PAGE_TEXT.MAIN_TEXT_intro.leading}
                  <br />
                  {HOME_PAGE_TEXT.MAIN_TEXT_intro.ending}
                </h3>
                <p>
                  {HOME_PAGE_TEXT.MAIN_TEXT_main.leading}
                  <br />
                  {HOME_PAGE_TEXT.MAIN_TEXT_main.ending}
                </p>
                <StyledButton onClick={() => navigate("/BiographyPage")}>
                  Les mer
                </StyledButton>
              </MarginDiv>
            </Container>
          </Column>
        </NewSection>
      </Container>
    </>
  );
};

export default Home;
