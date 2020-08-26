import styled, { css } from 'styled-components';

const Button = styled.button`
cursor:pointer;
text-transform: uppercase;
color: white;
&:hover{
    filter: brightness(90%);
}

${({ login }) => login && css`
background-color: ${props => props.theme.colors.blue.normal};
border-radius: 5px;
border: none;
padding: 5px 8px;


`}`

export default Button;