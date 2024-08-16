import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
const GlobalCSS = createGlobalStyle`

* {
 padding: 0;
 margin: 0;
 text-decoration: none;
 box-sizing: border-box;
}

body {
    width: 100%;
    font-family: ${theme.fonts.montserrat};
    background-color: ${theme.colors.dark};

    h1 {
        font-size: 24px;
        font-weight: bold;   
    }

    h2, h3, p {
        font-size: 12px;
    }
}
 
`;

export default GlobalCSS;
