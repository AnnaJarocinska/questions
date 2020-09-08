import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ icons }) => icons && css`
@media (min-width: 600px) {
    width: 10%;
}
@media (min-width: 1000px) {
    width: 25%;
}
`}

${({ buttons }) => buttons && css`
@media (min-width: 600px) {
    width: 52%;
}
@media (min-width: 1000px) {
    width: 35%;
}
`}
${({ main }) => main && css`
flex-direction: column;
height: 75vh;
`}
`
export default Container;
