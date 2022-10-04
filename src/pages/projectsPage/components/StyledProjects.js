import styled from "styled-components";

export const WebshopImage = styled.img`
  width: auto;
  height: 30vh;

  @media only screen and (max-width: 40em) {
    //mobile friendly
    height: 20vh;
  }
`;

export const MainDiv = styled.div`
  color: black;
  margin: 15px;
  text-align: center;
  margin: 0 10vw;
`;

export const BoxDiv = styled.div`
  background: rgba(6, 146, 170, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(6, 146, 170, 0.65);

  width: 37vw;
  height: 45vh;
  align-items: center;
  margin: 1vh;

  @media only screen and (max-width: 40em) {
    //mobile friendly
    width: 85vw;
    height: 31vh;
    margin: 0 auto;
  }
`;
