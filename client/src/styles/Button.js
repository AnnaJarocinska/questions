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
font-size:15px;
@media (min-width: 600px) {
font-size: 25px;
margin-right: 15px;
padding: 5px 8px;
}
`}

${({ form }) => form && css`
margin: 15px auto 0 auto;
width: 70%;
`}

${({ yellow }) => yellow && css`
background-color: ${props => props.theme.colors.yellow.dark};

`}
`

export default Button;