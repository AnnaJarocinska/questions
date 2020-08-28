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
padding: 5px 8px;


`}`

export default Button;