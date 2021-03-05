import styled, { css } from 'styled-components';
import Label from './Label';

const Input = styled.input`
height: 40px;
margin-top: 10px;
margin-bottom: 20px;
border: 3px dotted ${props => props.theme.colors.grey.normal};
&:checked + ${Label} {
  font-size: '35px';
  color: red;
}
${({ radio }) => radio && css`
height: auto;
padding: 5px;
${({ checked }) => checked + Label && css`
${Label} {
  font-size: '35px';
  color: red;
}
color:red;
font-size: 35px;
display:none;
`}
`}



  
`

export default Input;