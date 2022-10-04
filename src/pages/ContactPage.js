import { StyledButton } from "../styles/styles";

const url = "https://github.com/Masoer";

const Contact = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      ></link>
      <h1>Kontakt</h1>
      <p>Email: sofie.kodehode@gmail.com</p>
      <StyledButton
        onClick={() => {
          window.location.href = url;
        }}
      >
        Github
        <i class="fa fa-github"></i>
      </StyledButton>
    </>
  );
};

export default Contact;
