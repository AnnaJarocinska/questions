import styled, {css} from 'styled-components';

const Span = styled.span`
color: white;
&:hover{
    color: ${props => props.theme.colors.grey.medium};
}
${({ icon }) => icon && css`
margin-left: 15px;
margin-right: 5px;
`}
${({ admin }) => admin && css`
color: ${props => props.theme.colors.red.normal};
`}
${({ user }) => user && css`
color: ${props => props.theme.colors.green.normal};
`}
`
export default Span;