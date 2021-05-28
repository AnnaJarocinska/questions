import styled from 'styled-components';

const Select = styled.select`
height: 40px;
margin: 10px 0;
border: 3px dotted ${props => props.theme.colors.grey.normal};
}`

export default Select;