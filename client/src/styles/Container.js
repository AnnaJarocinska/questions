import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ buttons }) => buttons && css`
align-items: center;
`}
`

export default Container;


// ${({ home }) => home && css`
// position: absolute;
// top: 70%;
// left: 50%;
// `}