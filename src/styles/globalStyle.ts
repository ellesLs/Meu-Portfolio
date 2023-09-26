import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%; // 1.6rem => 16px

        //ScrollBar firefox
        scrollbar-width: thin;
        scrollbar-color: #bbbbbb;
    }

    body {
        /* font-size: 1.6rem; */
        font-size: clamp(1.6rem, 1vw + 0.4rem, 2rem);
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
    }

    :focus {
        outline-offset: 0.5rem;
        outline-color: ${({ theme }) => theme.colors.common.black};
    }
 
    button {
        cursor: pointer;
    }

    input, button, textarea, select {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
        
    .scrollBtn-wrap {
        position: relative;
        height: 0;
        overflow-x: clip;
    }
    
    
    //Scrollbar For Anothers Browsers
    ::-webkit-scrollbar {
        background-color: #f1f1f1;
        width: 10px
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bbbbbb;
        background-clip: padding-box;
        border-block: 2px solid transparent;
        border-inline: 1px solid transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a8a8a8;
    }

    ::-webkit-scrollbar-thumb:active {
        background-color: #818181;
    }

    ::-webkit-scrollbar-button:vertical {
        background-color: #bbbbbb;
        background-repeat: no-repeat;   
        background-size: 70%;
        background-position: center;
    }

    // Up
    ::-webkit-scrollbar-button:vertical:decrement {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='%23000000'  viewBox='0 0 256 256'%3E%3Cpath d='M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z'%3E%3C/path%3E%3C/svg%3E");   
    }

    // Down 
    ::-webkit-scrollbar-button:vertical:increment {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'%3E%3C/path%3E%3C/svg%3E"); 
    }

    ::-webkit-scrollbar-button:hover {
        background-color: #818181;
    }

`;
