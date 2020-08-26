import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import wood from '../images/woodblue.jpg';

const GlobalStyles = createGlobalStyle`
${normalize}
body{
    font-family: 'Arial';
    background-color: ${props => props.theme.colors.grey.light};
}
ul{
    list-style: none;
}
`

export default GlobalStyles;

