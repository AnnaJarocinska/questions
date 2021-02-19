import styled, { css } from 'styled-components';

const Input = styled.input`
height: 40px;
margin-top: 10px;
margin-bottom: 20px;
border: 3px dotted ${props => props.theme.colors.grey.normal};
${({ radio }) => radio && css`
height: auto;
`}
`

export default Input;