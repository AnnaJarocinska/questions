import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
body{
    font-family: 'Balsamiq Sans', cursive;
    font-family: 'Fredericka the Great', cursive;
    background-color: ${props => props.theme.colors.beige.light};
}
ul{
    list-style: none;
}
`

export default GlobalStyles;

