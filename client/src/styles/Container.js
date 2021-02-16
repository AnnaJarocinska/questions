import styled, { css } from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

${({ icons }) => icons && css`
white-space: nowrap;
@media (min-width: 600px) {
    max-width: 20%;
}
@media (min-width: 1000px) {
    max-width: 25%;
}
`}

${({ buttons }) => buttons && css`
margin-right: 10px;
@media (min-width: 600px) {
    max-width: 52%;
}
@media (min-width: 1000px) {
    max-width: 40%;
}
`}
${({ main }) => main && css`
flex-direction: column;
justify-content: space-around;
`}

${({ form }) => form && css`
padding: 100px;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
`}

${({ list }) => list && css`
flex-direction: column;
`}

${({ mobile }) => mobile && css`
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
flex-basis: 15vh;
`}
`
export default Container;
