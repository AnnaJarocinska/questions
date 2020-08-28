import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;


${({ buttons }) => buttons && css`
flex-basis: 200px;
`}

${({ nav }) => nav && css`
background-color: ${props => props.theme.colors.white.normal};
`}
`

export default Container;