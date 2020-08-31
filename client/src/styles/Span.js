import styled from 'styled-components';

const Span = styled.span`
color: white;
&:hover{
    color: ${props => props.theme.colors.grey.medium};
}
`
export default Span;