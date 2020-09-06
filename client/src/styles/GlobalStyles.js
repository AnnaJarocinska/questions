import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
*{
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Fredericka the Great', cursive;
    background-color: ${props => props.theme.colors.beige.light};
    font-size: 18px;
    max-width: 100%;
    overflow-x: hidden;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
    color: white;
}
`

export default GlobalStyles;

