import styled from 'styled-components';

const Span = styled.span`
&:hover{
    color: ${props => props.theme.colors.grey.medium};
}
`
export default Span;