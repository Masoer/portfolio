import { StyledButton } from "../styles/styles";
import { ContactDiv, DivButton } from "./contactPage/ContactStyled";

const urlGit = "https://github.com/Masoer";
const urlLinkedin =
  "https://www.linkedin.com/in/margrethe-sofie-erstad-ba01b1249/";
const urlPortfolie = "https://github.com/Masoer/portfolio";

const Contact = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      ></link>
      <ContactDiv>
        <h2>Kontakt</h2>
        <p>Email: mana_katt@hotmail.com</p>
        <DivButton>
          <StyledButton
            onClick={() => {
              window.location.href = urlGit;
            }}
          >
            Github
            <i class="fa fa-github"></i>
          </StyledButton>
          <StyledButton
            onClick={() => {
              window.location.href = urlLinkedin;
            }}
          >
            Linkedin
            <i class="fa fa-linkedin-square"></i>
          </StyledButton>
        </DivButton>
      </ContactDiv>

      <ContactDiv>
        <h2>Repository for porteføljen:</h2>

        <StyledButton
          onClick={() => {
            window.location.href = urlPortfolie;
          }}
        >
          Github
          <i class="fa fa-github"></i>
        </StyledButton>
      </ContactDiv>
    </>
  );
};

export default Contact;
