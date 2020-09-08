import styled, { css } from 'styled-components';

const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
letter-spacing: 1px;
color: white;
&:hover{
    filter: brightness(90%);
}

${({ login }) => login && css`
background-color: ${props => props.theme.colors.blue.normal};
border-radius: 6px;
border: none;
font-size: 20px;
padding: 4px 6px;
@media (min-width: 600px) {
    font-size: 16px;
}
@media (min-width: 1000px) {
font-size: 22px;
}
`}

${({ form }) => form && css`
margin: 0 auto;
margin-top: 15px;
width: 70%;
`}

${({ yellow }) => yellow && css`
background-color: ${props => props.theme.colors.yellow.dark};
margin-right:0;
`}

${({ menu }) => menu && css`
font-size:15px;
padding: 2px 4px;
`}

${({ red }) => red && css`
background-color: ${props => props.theme.colors.red.normal};
margin: 0 auto;
padding: 6px 30px;
`}
`

export default Button;