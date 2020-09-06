import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ buttons }) => buttons && css`

@media (min-width: 1000px) {
width: 35%;
}
`}
`

export default Container;

// @media (min-width: 600px) {
//     width: 52%;
//     }
