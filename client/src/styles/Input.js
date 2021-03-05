import styled, { css } from 'styled-components';
import Label from './Label';

const Input = styled.input`
height: 40px;
margin-top: 10px;
margin-bottom: 20px;
border: 3px dotted ${props => props.theme.colors.grey.normal};

${({ radio }) => radio && css`
display: none;
&:checked + ${Label} {
background-color: ${props => props.theme.colors.green.normal};
}`
}`
export default Input;