import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    overscroll-behavior : contain;

    ${reset}

    * {
        box-sizing: border-box;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    html, body {
        margin: 0 auto;
        font-size: 62.5%;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color:inherit;
    }

    button {
        border: none;
        background: #eee;
        cursor: pointer;
        font: inherit;
    }
`;

export default GlobalStyle;