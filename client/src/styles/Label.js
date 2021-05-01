import styled, { css } from 'styled-components';

const Label = styled.label`
padding: 5px;

${({ radio }) => radio && css`
border-radius: 6px;
border: 1px dotted gray;
background-color:${props => props.theme.colors.grey.medium_dark};
color: ${props => props.theme.colors.white.normal};
padding: 5px 10px; 
font-size: 15px;
letter-spacing: 1px;
&:hover{
    filter: brightness(120%);
}`
}`

export default Label;