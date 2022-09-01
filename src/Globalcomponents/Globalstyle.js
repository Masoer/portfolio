import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        
       
       
        
        
    };
    body {
        background-image:linear-gradient(135deg, rgba(235,241,246,1) 0%,rgba(171,211,238,1) 69%,rgba(137,195,235,1) 88%,rgba(213,235,251,1) 17%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        
    
    }
    h3 {
        color: #008cea;
    }
   
    
`;

export default GlobalStyle;
