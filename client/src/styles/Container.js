import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ buttons }) => buttons && css`
align-items: center;
`}

${({ nav }) => nav && css`
background-color: ${props => props.theme.colors.grey.dark};
padding: 10px;
border-bottom:15px solid ${props => props.theme.colors.yellow.dark};
 
`}

${({ home }) => home && css`
position: absolute;
top: 70%;
left: 50%;
`}

`

export default Container;