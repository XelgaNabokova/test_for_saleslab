import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: .875rem;
        background: #F5F5F5;
    }
    
    *, ::after, ::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

`