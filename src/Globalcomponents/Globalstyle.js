import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        font-size: 1.3vw;

        @media only screen and (max-width: 40em) {
          font-size: 3vw;
        }
    };
    body {
        background-image:linear-gradient(135deg, rgba(235,241,246,1) 0%,rgba(171,211,238,1) 69%,rgba(137,195,235,1) 88%,rgba(213,235,251,1) 17%);
      
        background-attachment: fixed;
    
    }
    h3, h2 {
        color: #008cea;
    }
   
    

`;

export default GlobalStyle;
