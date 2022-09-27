import styled from "styled-components";

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
  height: 93vh;
  width: auto;

  @media only screen and (max-width: 40em) {
    display: none;
  }
  @media only screen and (min-width: 100em) {
    height: 95vh;
  }
`;

export const ImagePhone = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 40vh;
    width: auto;
    border-radius: 50%;
  }
`;

export const MarginDiv = styled.div`
  margin-left: 20px;
  margin-top: 150px;
  @media only screen and (max-width: 40em) {
    margin-top: 50px;
  }
`;

export const Tittel = styled.h1`
  font-size: 2rem;
  margin-top: -20px;

  @media only screen and (max-width: 40em) {
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  width: 22vh;
  padding: 10px;
  color: #008cea;
  font-weight: bold;
  text-align: center;

  background: rgba(6, 146, 170, 0);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(6, 146, 170, 0.65);

  @media only screen and (max-width: 40em) {
    margin-bottom: 3vh;
  }
`;
